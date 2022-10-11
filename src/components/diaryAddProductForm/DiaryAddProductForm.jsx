import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, useFormik } from 'formik';
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
  let isSelected = true;
  const formik = useFormik({
    initialValues: {
      productName: '',
      productWeight: '',
    },
    // validateOnBlur,
    // validationSchema={schema}
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    if (debouncedValue) {
      clearTimeout(debouncedValue);
    }
    setDebouncedValue(
      setTimeout(() => dispatch(productSearch(formik.values.productName)), 500)
    );
    // eslint-disable-next-line
  }, [formik.values.productName]);

  const handleChangeMultiple = ({ target }) => {
    setSearchProduct(target.options[target.selectedIndex].title);
    setSelectProduct(target.options[target.selectedIndex].value);
    dispatch(resetState());
  };

  function handleSubmit(values) {
    const obj = {
      date: date.toISOString().split('T')[0],
      productId: selectProduct,
      weight: values.productWeight,
    };
    dispatch(addDay(obj));
    setSearchProduct('');
    formik.resetForm();
  }
  return (
    <>
      <Box position="relative">
        <StyledProductForm onSubmit={formik.handleSubmit}>
          <Box position="relative">
            <TextField
              id="productName"
              type="text"
              name="productName"
              autoComplete="off"
              label="Введите название продукта"
              onChange={formik.handleChange}
              value={searchProduct ? searchProduct : formik.values.productName}
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
              onChange={formik.handleChange}
              value={formik.values.productWeight}
              variant="standard"
            />
            {/* <StyledFormLabel >Граммы</StyledFormLabelf> */}
          </Box>

          <StyledButtonIcon type="submit" aria-label="добавить продукт">
            <StyledIcon src={addIcon} />
          </StyledButtonIcon>
        </StyledProductForm>
        {products.length > 0 && (
          <Select
            multiple
            native
            value={products}
            // @ts-ignore Typings are not considering `native`
            onChange={handleChangeMultiple}
            label="Выберите продукт"
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
