import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { useState } from 'react';
// import * as yup from 'yup';
import { productSearch } from 'redux/productSearch/productSearchOperations';
import { selectProduct } from 'redux/productSearch/productSearchSelectors';
import { addDay } from 'redux/day/dayOperations';
import Box from 'components/common/box';
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
  const [searchProductRes, setSearchProductRes] = useState('');
  const product = useSelector(selectProduct);
  const dispatch = useDispatch();

  const initialValues = {
    productName: '',
    productWeight: '',
  };

  const handleChange = e => {
    setSearchProductRes(e.currentTarget.elements.productName.value);
    if (searchProductRes.trim().length >= 2) {
      dispatch(productSearch(searchProductRes));
    }
  };

  // useEffect(() => {
  //   if (searchProductRes >= 2) {
  //     dispatch(productSearch(searchProductRes));
  //   }
  // }, [dispatch, searchProductRes]);

  const handleSubmit = (values, actions) => {
    const obj = {
      date: date,
      productId: product[0]._id,
      weight: values.productWeight,
    };

    // console.log(product[0]._id);
    dispatch(addDay(obj));

    console.log(product);
    // dispatch(productSearch(values.text));
    // actions.resetForm();
  };
  const [prod, setProd] = useState();

  const handleChangeMultiple = ({ target }) => {
    console.log(target);
    setProd(target.options[target.selectedIndex].text);

    // setSelectedData(target.value);
    // setSelectedDataText(target.options[target.selectedIndex].text);
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

        {product.length > 0 && (
          <Select
            multiple
            native
            value={prod}
            // @ts-ignore Typings are not considering `native`
            onChange={handleChangeMultiple}
            // label="Native"
            // inputProps={{
            //   id: 'productName',
            // }}
          >
            {product.map(({ title, _id }) => (
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
