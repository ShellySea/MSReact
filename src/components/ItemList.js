import { ITEMS_URL } from "../utils/constants";

const ItemList = (props) => {
  //   console.log("item cards");
  //   console.log(props);
  const items = props.items;
  console.log(props.dummy);
  return (
    <div>
      {items.map(
        (i) => (
          <div
            key={i.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 flex justify-between text-left"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{i.card.info.name}</span>
                <span> ₹ - {i.card.info.price / 100}</span>
              </div>
              <p className="text-xs">{i.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <img
                className="w-full"
                alt="res-logo"
                src={ITEMS_URL + i.card.info.imageId}
              />
              <button className="border border-black rounded-b-lg text-green-800 w-full items-center shadow-lg">
                Add
              </button>
            </div>
          </div>
        )
        // console.log(i.card.info)
      )}
    </div>
  );
};

export default ItemList;
