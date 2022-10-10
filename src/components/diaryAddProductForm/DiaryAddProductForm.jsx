import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { useState, useEffect } from 'react';
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
} from './DiaryAddProductForm.styled';
import addIcon from 'assets/icons/addProduct.svg';

export default function DiaryAddProductForm({ date }) {
  const [searchProductRes, setSearchProductRes] = useState('');
  const product = useSelector(selectProduct);
  const dispatch = useDispatch();

  const initialValues = {
    productName: '',
    productWeight: '',
  };

  // const fetchData = async name => {
  //   const { data } = await axios.get(`/product?search=${name}`);
  //   console.log(data);
  //   // setSearchProductRes(data);
  // };

  const handleChange = e => {
    setSearchProductRes(e.currentTarget.elements.productName.value);
    if (searchProductRes.trim().length >= 2) {
      dispatch(productSearch(searchProductRes));
    }
    // console.log('actions', actions);
  };

  // useEffect(() => {
  //   if (searchProductRes >= 2) {
  //     dispatch(productSearch(searchProductRes));
  //   }
  // }, [dispatch, searchProductRes]);

  // console.log(product);

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

  const [items, setItems] = useState([]);

  return (
    <>
      <Formik
        initialValues={initialValues}
        validateOnBlur
        // validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <StyledProductForm onChange={handleChange} /* autoComplete="off" */>
          <Box position="relative">
            <InputStyled
              id="productName"
              type="text"
              name="productName"
              autoComplete="off"
            />
            <LabelStyled htmlFor="productName">
              Введите название продукта
            </LabelStyled>

            {/* <StyledFormLabel >Введите название продукта</StyledFormLabel> */}
          </Box>

          <Box position="relative">
            <InputStyled
              id="productWeight"
              type="number"
              name="productWeight"
              autoComplete="off"
            />
            <LabelStyled htmlFor="productWeight">Граммы</LabelStyled>
            {/* <StyledFormLabel >Граммы</StyledFormLabelf> */}
          </Box>

          <StyledButtonIcon type="submit" aria-label="добавить продукт">
            <StyledIcon src={addIcon} />
          </StyledButtonIcon>
        </StyledProductForm>
      </Formik>
      {product.length > 0 && (
        <select
        // size={`${searchProductRes.length}`}
        // className={styles.selectProduct}
        // onChange={handleChangeSelect}
        >
          <option /* className={styles.optionStyle}  */ disabled>
            Выберите подходящий продукт
          </option>
          {product.map(({ title, _id }) => (
            <option title={title.ru} key={_id} value={_id}>
              {title.ru}
            </option>
          ))}
        </select>
      )}
    </>
  );
}
