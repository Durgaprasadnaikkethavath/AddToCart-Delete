const products = [
  {
    Id: 0,
    title: "phone",
    image:
      "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?cs=srgb&dl=pexels-fotios-photos-1092644.jpg&fm=jpg",
    price: 20,
  },
  {
    Id: 1,
    title: "Laptop",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw7p2GSN6YX1Pt-SgBbxQ1bwFNkP3jyBsnOA&s",
    price: 49,
  },
  {
    Id: 2,
    title: "smartWatch",
    image:
      "https://www.cnet.com/a/img/resize/770007077c38361ca13ef0b0aa4c208f88fa2053/hub/2023/09/20/9e9b8e2b-04ee-4087-b819-c99ec8bbc980/apple-watch-ultra-2-7.jpg?auto=webp&fit=crop&height=1200&width=1200",
    price: 30,
  },
  {
    Id: 3,
    title: "cable",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtcC2e1JstwBZMuQza5YGKFnvDLhbHR77syQ&s",
    price: 12,
  },
];

const categories = [
  ...new Set(
    products.map((item) => {
      return item;
    })
  ),
];

document.getElementById("root").innerHTML = categories
  .map((item) => {
    var { title, image, price } = item;

    return `
    <div class="box_container">
    <div class="boxs">
      <img class="box_image" src=${image} width="200px" height="200px"></img>
      <h4>${title}</h4>
      <h1>$ ${price}.00</h1>
      <button>AddToCart</button>
      </div>
    <div>
    `;
  })
  .join();
