const formatValue = (input: string | number | boolean) => {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    return !input;
  }
};

const getLength = (input: string | any[]) => {
  if (typeof input === "string") {
    return input.length;
  } else if (Array.isArray(input)) {
    return input.length;
  }
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type Item = {
  title: string;
  rating: number;
};

function filterByRating(i: Item[]): Item[] {
  return i.filter((i) => i.rating >= 4);
}

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
const filterActiveUsers = (users: readonly User[]): User[] => {
  return users.filter((user) => {
    if (typeof user.isActive !== "boolean") {
      return false;
    }
    return user.isActive;
  });
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
  const available = book.isAvailable ? "Yes" : " No";
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${available}`
  );
};

type Arraw = (string | number)[];
const getUniqueValues = (array: Arraw, array2: Arraw): Arraw => {
  const res: Arraw = [];

  const exists = (value: string | number): boolean => {
    for (let i = 0; i < res.length; i++) {
      if (res[i] === value) {
        return true;
      }
    }
    return false;
  };

  for (let i = 0; i < array.length; i++) {
    if (!exists(array[i])) {
      res[res.length] = array[i];
    }
  }

  for (let i = 0; i < array2.length; i++) {
    if (!exists(array2[i])) {
      res[res.length] = array2[i];
    }
  }

  return res;
};

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: Product[]): number => {
  if (products.length === 0) return 0;
  const totalProductPrice = products
    .map((product: Product): number => {
      const { price, quantity, discount = 0 } = product;
      const result = price * quantity;
      const discountPrice = 1 - discount / 100;
      return result * discountPrice;
    })
    .reduce((sum: number, totalItem: number) => sum + totalItem, 0);

  return totalProductPrice;
};
