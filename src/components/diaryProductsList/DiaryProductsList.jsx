import DiaryProductsListItem from 'components/diaryProductsListItem';

const eatenProducts = [
  {
    title: 'Меланж яичный',
    weight: 200,
    kcal: 157,
    id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
  },
];

function DiaryProductsList() {
  const { id, title, weight, kcal } = eatenProducts[0];
  return (
    <div>
      <DiaryProductsListItem
        id={id}
        title={title}
        weight={weight}
        kcal={kcal}
      />
    </div>
  );
}

export default DiaryProductsList;
