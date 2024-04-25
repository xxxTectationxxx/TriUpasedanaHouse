document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Mie Goreng", img: "mie-goreng.jpg", price: 15_000 },
      { id: 2, name: "Nasi Goreng", img: "nasi-goreng.jpg", price: 25_000 },
      { id: 3, name: "Bubur Bali", img: "bubur-bali.jpg", price: 20_000 },
      { id: 4, name: "Roti Telur", img: "roti-telur.jpg", price: 15_000 },
      { id: 5, name: "Jaja Bali", img: "jaja-bali.jpg", price: 20_000 },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      const cartItem = this.items.find((item) => item.id === newItem.id);
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        this.items = this.items.map((item) => {
          if (item.id !== newItem.id) {
            return item;
          } else {
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },
    remove(id) {
      const cartItem = this.items.find((item) => item.id === id);
      if (cartItem.quantity > 1) {
        this.items = this.items.map((item) => {
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

const checkoutButton = document.querySelector("#checkout-button");
const form = document.querySelector("#checkoutForm");

form.addEventListener("keyup", function () {
  let allFieldsFilled = true;
  for (let i = 0; i < form.elements.length; i++) {
    if (form.elements[i].value.length === 0) {
      allFieldsFilled = false;
      break;
    }
  }
  if (allFieldsFilled) {
    checkoutButton.classList.remove("disabled");
    checkoutButton.disabled = false;
  } else {
    checkoutButton.classList.add("disabled");
    checkoutButton.disabled = true;
  }
});

checkoutButton.addEventListener("click", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const objData = Object.fromEntries(formData);

  const message = formatMessage(objData);
  window.open(
    "https://wa.me/6285237123026?text=" + encodeURIComponent(message)
  );
});

const formatMessage = (obj) => {
  const cartData = Alpine.store("cart");
  const items = cartData.items.map((item) => ({
    name: item.name,
    quantity: item.quantity,
    total: item.total,
  }));

  return `Data Customer
  Nama: ${obj.name}
  Email: ${obj.email}
  No HP: ${obj.phone}
  Data Pesanan
  ${items.map(
    (item) => `${item.name} (${item.quantity} x ${rupiah(item.total)}) \n`
  )}
  TOTAL: ${rupiah(cartData.total)}
  Terima Kasih.
`;
};

const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
