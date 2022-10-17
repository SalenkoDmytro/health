import { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import Select from '@mui/material/Select';
import * as yup from 'yup';

import { productSearch } from 'redux/productSearch/productSearchOperations';
import {
  selectError,
  selectProducts,
} from 'redux/productSearch/productSearchSelectors';
import { resetState } from 'redux/productSearch/productSearchSlice';
import { addDayProduct } from 'redux/userData/userDataOperation';

import Box from 'components/common/box';
import {
  StyledProductForm,
  StyledNameWrapper,
  InputStyledNameProduct,
  StyledWeightWrapper,
  InputStyledWeightProduct,
  StyledButtonIcon,
  StyledIcon,
  StyledSpan,
  Wrapper,
} from './DiaryAddProductForm.styled';
import addIcon from 'assets/icons/addProduct.svg';

export default function DiaryAddProductForm({ date }) {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const error = useSelector(selectError);
  const [selectProduct, setSelectProduct] = useState(null);
  const [debouncedValue, setDebouncedValue] = useState(null);
  const validationSchema = yup.object({
    productName: yup
      .string('Выберите продукт из списка')
      .required('Продукт обязателен!'),
    productWeight: yup
      .number('Введите число')
      .typeError('Введите число')
      .positive()
      .integer()
      .min(10, 'Введите больший вес')
      .max(1000, 'Введите меньший вес')
      .required('Вес обязателен!'),
  });

  const formik = useFormik({
    initialValues: {
      productName: '',
      productWeight: '',
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    if (selectProduct) return;
    if (debouncedValue) {
      clearTimeout(debouncedValue);
    }
    setDebouncedValue(
      setTimeout(() => dispatch(productSearch(formik.values.productName)), 500)
    );
    // eslint-disable-next-line
  }, [formik.values.productName]);

  //*select products from list
  const handleChangeMultiple = ({ target }) => {
    formik.setFieldValue(
      'productName',
      target.options[target.selectedIndex].title
    );
    setSelectProduct(target.options[target.selectedIndex].value);
    dispatch(resetState());
  };

  function handleSubmit(values) {
    const obj = {
      date: date.split('T')[0],
      productId: selectProduct,
      weight: values.productWeight,
    };
    dispatch(addDayProduct(obj));
    setSelectProduct(null);
    formik.resetForm();
  }

  const selectRef = useRef();

  const handleClick = useCallback(
    e => {
      const path = e.path || (e.composedPath && e.composedPath());
      if (!path.includes(selectRef.current)) {
        dispatch(resetState());
      }
    },
    [dispatch]
  );

  useEffect(() => {
    document.body.addEventListener('click', handleClick);
    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, [handleClick]);

  const inputClick = e => {
    setSelectProduct('');
    formik.setFieldValue('productName', e.target.value);
  };
  return (
    <>
      <Box position="relative">
        <StyledProductForm onSubmit={formik.handleSubmit}>
          <StyledNameWrapper>
            <InputStyledNameProduct
              id="productName"
              name="productName"
              autoComplete="off"
              label="Введите название продукта"
              onChange={inputClick}
              onBlur={formik.handleBlur}
              value={formik.values.productName}
              error={
                formik.touched.productName &&
                !selectProduct &&
                Boolean(formik.values.productName.length !== 0) &&
                Boolean(formik.errors.productName)
              }
              helperText={
                formik.touched.productName && formik.errors.productName
              }
              variant="standard"
            />
          </StyledNameWrapper>

          <StyledWeightWrapper>
            <InputStyledWeightProduct
              id="productWeight"
              name="productWeight"
              autoComplete="off"
              type="number"
              label="Граммы"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.productWeight}
              error={
                formik.touched.productWeight &&
                formik.values.productWeight.length !== 0 &&
                Boolean(formik.errors.productWeight)
              }
              helperText={
                formik.touched.productWeight && formik.errors.productWeight
              }
              variant="standard"
            />
          </StyledWeightWrapper>
          <StyledButtonIcon type="submit" aria-label="добавить продукт">
            <StyledIcon src={addIcon} />
          </StyledButtonIcon>
        </StyledProductForm>
        <Wrapper>
          {error !== 400 && products?.length > 0 ? (
            <Select
              multiple
              native
              value={products}
              onChange={handleChangeMultiple}
              label="Выберите продукт"
              ref={selectRef}
            >
              {products.map(({ title, _id }) => (
                <option title={title.ru} key={_id} value={_id}>
                  {title.ru}
                </option>
              ))}
            </Select>
          ) : (
            error === 400 && (
              <StyledSpan>Введите другое название продукта</StyledSpan>
            )
          )}
        </Wrapper>
      </Box>
    </>
  );
}
