## 1. What are some differences between interfaces and types in TypeScript?

interfaces এবং types দুটিই ডেটার গঠন নির্ধারণ এর জন্য ব্যবহার করা হয়। তবে এদের মধ্যে পার্থক্য হলো Interfaces শুধুমাত্র অবজেক্ট এর গঠন নির্ধারণ করতে পারে, যেখানে টাইপ অবজেক্ট, প্রিমিটিভ ডেটা টাইপ (string, number) এবং union টাইপের মত আরও অনেক ধরনের ডেটার জন্য ব্যবহার করা যায়।

# interfaces এবং types পার্থক্য ঃ

- ব্যবহারের ক্ষেত্রে
  Interfaces: শুধুমাত্র অবজেক্টের গঠন নির্ধারণ করে
  Type: অবজেক্ট, ডেটা টাইপ(string , number) এবং union টাইপ নির্ধারণ করতে পারে।

- অতিরিক্ত সঙ্গা
  Interfaces: একাধিক interface মার্জ করা যায় ।
  Type: টাইপ সংজ্ঞা মার্জ করা যায় না।

- ক্লাস
  Interfaces: ক্লাস interfaces কে ইমপ্লিমেন্ট করতে পারে।
  Type: ক্লাস type কে ইমপ্লিমেন্ট করতে পারে না।

- পারফরম্যান্স
  Interfaces:টাইপ কম্পাইল করার চেয়ে দ্রুত কম্পাইল হয়।
  Type:টাইপ কম্পাইল করতে interfaces এর চেয়ে বেসি টাইম নেয়।

ts``
example

interface Person {
name: string;
age: number;
}

type User = string | number;

``ts

## 2. What is the use of the keyof keyword in TypeScript? Provide an example.

keyof keyword ব্যবহার করা হয় কোন অবজেক্ট টাইপের সমস্ত key এর union টাইপ বের করার জন্য । অর্থাৎ কোনো interface বা টাইপ এর প্রোপার্টিগুলোর নাম গুলোকে একটি টাইপে পাওয়া যায়।

ts```
Ex:
interface User {
id: number;
name: string;
email: string;
}

type UserValue = keyof User;

uservalue : "id" | "name" | "email"

```ts

```
