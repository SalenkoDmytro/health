import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
// import * as yup from 'yup';
import { productSearch } from 'redux/productSearch/productSearchOperations';
import { selectProducts } from 'redux/productSearch/productSearchSelectors';
import { addDay } from 'redux/day/dayOperations';
import Box from 'components/common/box';
import { resetState } from 'redux/productSearch/productSearchSlice';
import {
  StyledProductForm,
  InputStyled,
  LabelStyled,
  StyledFormLabel,
  StyledButtonIcon,
  StyledIcon,
  StyledSelect,
  StyledOption,
} from './DiaryAddProductForm.styled';
import addIcon from 'assets/icons/addProduct.svg';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';

export default function DiaryAddProductForm({ date }) {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const [searchProduct, setSearchProduct] = useState('');
  const [selectProduct, setSelectProduct] = useState('');
  const [debouncedValue, setDebouncedValue] = useState(null);

  const initialValues = {
    productName: '',
    productWeight: '',
  };

  useEffect(() => {
    if (debouncedValue) clearTimeout(debouncedValue);
    if (searchProduct.length >= 2 && !selectProduct) {
      setDebouncedValue(
        setTimeout(() => dispatch(productSearch(searchProduct)), 500)
      );
    }
    // eslint-disable-next-line
  }, [searchProduct, selectProduct]);

  const handleChange = e => {
    setSearchProduct(e.currentTarget.elements.productName.value);
    setSelectProduct('');
    if (searchProduct.length < 2) dispatch(resetState());
  };

  const handleChangeMultiple = ({ target }) => {
    setSearchProduct(target.options[target.selectedIndex].title);
    setSelectProduct(target.options[target.selectedIndex].value);
    dispatch(resetState());
  };

  const handleSubmit = (values, actions) => {
    const obj = {
      date: date,
      productId: selectProduct,
      weight: values.productWeight,
    };
    dispatch(addDay(obj));
    actions.resetForm();
  };

  return (
    <>
      <Box position="relative">
        <Formik
          initialValues={initialValues}
          validateOnBlur
          // validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <StyledProductForm onChange={handleChange}>
            <Box position="relative">
              <TextField
                htmlFor="productName"
                id="productName"
                type="text"
                name="productName"
                autoComplete="off"
                label="Введите название продукта"
                value={searchProduct}
                variant="standard"
              />
              {/* <StyledFormLabel >Введите название продукта</StyledFormLabel> */}
            </Box>

            <Box position="relative">
              <TextField
                id="productWeight"
                type="text"
                name="productWeight"
                autoComplete="off"
                label="Граммы"
                variant="standard"
              />
              {/* <StyledFormLabel >Граммы</StyledFormLabelf> */}
            </Box>

            <StyledButtonIcon type="submit" aria-label="добавить продукт">
              <StyledIcon src={addIcon} />
            </StyledButtonIcon>
          </StyledProductForm>
        </Formik>

        {products.length > 0 && (
          <Select
            multiple
            native
            value={products}
            // @ts-ignore Typings are not considering `native`
            onChange={handleChangeMultiple}
            // label="Native"
            // inputProps={{
            //   id: 'productName',
            // }}
          >
            {products.map(({ title, _id }) => (
              <option title={title.ru} key={_id} value={_id}>
                {title.ru}
              </option>
            ))}
          </Select>
        )}
      </Box>
    </>
  );
}
