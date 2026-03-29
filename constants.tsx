
import { BlogPost, Certificate } from './types';

export const CERTIFICATES: Certificate[] = [
  {
    id: 'cert-1',
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: 'Dec 11, 2024',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
    skills: ['Cybersecurity basics', 'Threat detection', 'Data protection'],
    pdfUrl: '/certificates/I2CSUpdate20251227-31-t9j5zj.pdf',
    certificateImage: '/certificates/images/I2CSUpdate20251227-31-t9j5zj.png'
  },
  {
    id: 'cert-2',
    title: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    date: 'Nov 21, 2025',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200',
    skills: ['IPv4/IPv6', 'Routing concepts', 'Network troubleshooting'],
    certificateImage: '/certificates/images/NetworkingBasicsUpdate20251227-30-mhlhv8.png'
  },
  {
    id: 'cert-3',
    title: 'JavaScript Essentials 1',
    issuer: 'JS Institute / Cisco Academy',
    date: 'Dec 01, 2025',
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&q=80&w=1200',
    skills: ['JS Syntax', 'Variables', 'Control Flow', 'Functions'],
    certificateImage: '/certificates/images/JavaScriptEssentials1Update20251227-32-ie38ir.png'
  },
  {
    id: 'cert-4',
    title: 'JavaScript Essentials 2',
    issuer: 'JS Institute / Cisco Academy',
    date: 'Dec 22, 2025',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=1200',
    skills: ['OOP in JS', 'Async Programming', 'Prototypes', 'JSON'],
    certificateImage: '/certificates/images/JavaScriptEssentials2Update20251226-31-uxzju5.png'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'js-deep-dive-variables',
    title: 'JavaScript Deep Dive: Từ Scope, Hoisting đến Cơ chế Bộ nhớ',
    category: 'JavaScript',
    date: '2024-06-01',
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Tìm hiểu chi tiết về cách JavaScript quản lý biến, phạm vi truy cập và những lỗi thường gặp với Hoisting.',
    content: `
### 1. Sự khác biệt giữa Var, Let và Const
Trong kỷ nguyên hiện đại của JavaScript, việc hiểu rõ cách khai báo biến là nền tảng quan trọng nhất. Mỗi từ khóa có đặc điểm riêng biệt ảnh hưởng đến cách code hoạt động.

**Var - Function Scope:**
- \`var\`: Có phạm vi hàm (function scope), cho phép khai báo lại và có cơ chế hoisting gây nhiều tranh cãi.
- Biến \`var\` có thể truy cập trong toàn bộ function, không phụ thuộc vào block scope.
- Được khởi tạo với giá trị \`undefined\` khi hoisting.

\`\`\`javascript
// ❌ Hạn chế dùng var vì dễ gây lỗi logic
function exampleVar() {
  if (true) {
var name = "Tuấn";
  }
  console.log(name); // "Tuấn" - vẫn truy cập được!
  var name = "Nam"; // Khai báo lại được - rất nguy hiểm!
}

// Vấn đề với vòng lặp
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // In ra: 3, 3, 3 (không phải 0, 1, 2!)
}
\`\`\`

**Let - Block Scope:**
- \`let\`: Có phạm vi khối (block scope), không thể khai báo lại trong cùng một scope, giúp code an toàn hơn.
- Chỉ tồn tại trong block \`{}\` nơi nó được khai báo.
- Rơi vào Temporal Dead Zone (TDZ) trước khi được khởi tạo.

\`\`\`javascript
// ✅ Let giải quyết vấn đề của var
function exampleLet() {
  if (true) {
    let name = "Tuấn";
    console.log(name); // "Tuấn"
  }
  // console.log(name); // ReferenceError: name is not defined
  
  // Khai báo lại trong scope khác - OK
  let name = "Nam";
  console.log(name); // "Nam"
}

// Vòng lặp với let hoạt động đúng
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // In ra: 0, 1, 2 ✅
}
\`\`\`

**Const - Immutable Reference:**
- \`const\`: Giống let nhưng dùng cho hằng số (không thể gán lại giá trị).
- Lưu ý: \`const\` không làm cho object/array immutable, chỉ không thể gán lại reference.

\`\`\`javascript
// ✅ Luôn ưu tiên dùng const, nếu cần gán lại thì dùng let
const STUDENT_ID = "210001";
// STUDENT_ID = "210002"; // TypeError: Assignment to constant variable

let score = 8.5;
score = 9.0; // OK

// Const với object/array
const student = { name: "Tuấn", age: 22 };
student.age = 23; // OK - thay đổi property được
// student = { name: "Nam" }; // Error - không thể gán lại reference

const numbers = [1, 2, 3];
numbers.push(4); // OK
// numbers = [5, 6]; // Error
\`\`\`

### 2. Cơ chế Hoisting và Temporal Dead Zone (TDZ)
Hoisting là hành động mặc định của JavaScript engine đưa các phần khai báo lên đầu scope. Tuy nhiên, sự khác biệt giữa các từ khóa là rất lớn và quan trọng.

**Hoisting với Var:**
- Biến \`var\` được "nâng lên" và khởi tạo với giá trị \`undefined\`.
- Có thể truy cập trước khi khai báo (nhưng giá trị là \`undefined\`).

\`\`\`javascript
console.log(a); // Output: undefined (không bị lỗi!)
var a = 10;
console.log(a); // Output: 10

// Tương đương với:
var a; // Hoisted và khởi tạo = undefined
console.log(a);
a = 10;
console.log(a);
\`\`\`

**Hoisting với Let/Const và TDZ:**
- \`let\` và \`const\` cũng được hoisted, nhưng không được khởi tạo.
- Rơi vào Temporal Dead Zone (TDZ) - vùng không thể truy cập từ đầu scope đến dòng khai báo.

\`\`\`javascript
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); // 20

// TDZ với const
function exampleTDZ() {
  console.log(typeof x); // ReferenceError (không phải "undefined"!)
  const x = 10;
}
\`\`\`

**Ví dụ thực tế về lỗi TDZ:**
\`\`\`javascript
// Lỗi phổ biến khi refactor code
function processData() {
  if (true) {
    // Di chuyển dòng này lên trên sẽ gây lỗi
    console.log(value); // ReferenceError nếu value là let/const
    let value = "data";
  }
}
\`\`\`

### 3. Kiểu dữ liệu và Bộ nhớ (Stack vs Heap)
JavaScript phân loại dữ liệu thành 2 nhóm chính với cách lưu trữ khác nhau, ảnh hưởng đến hiệu năng và cách xử lý.

**Primitive Types (Stack):**
- **String, Number, Boolean, Null, Undefined, Symbol, BigInt**
- Lưu trữ trực tiếp trên Stack, truy cập cực nhanh theo giá trị.
- Khi copy, tạo bản sao độc lập.

\`\`\`javascript
let a = 10;
let b = a; // Copy giá trị
b = 20;
console.log(a); // 10 (không thay đổi)

let name1 = "Tuấn";
let name2 = name1; // Copy giá trị
name2 = "Nam";
console.log(name1); // "Tuấn" (không thay đổi)
\`\`\`

**Reference Types (Heap):**
- **Object, Array, Function, Date, RegExp**
- Lưu trữ trên Heap, Stack chỉ giữ "địa chỉ" (reference) trỏ đến vùng nhớ đó.
- Khi copy, chỉ copy địa chỉ, không copy dữ liệu.

\`\`\`javascript
// ❌ Vấn đề với reference types
let student1 = { name: "Tuấn", age: 22 };
let student2 = student1; // Copy reference, không phải giá trị!
student2.age = 23;
console.log(student1.age); // 23 (đã thay đổi!)

// ✅ Giải pháp: Shallow Copy
let student3 = { ...student1 }; // Spread operator
student3.age = 24;
console.log(student1.age); // 23 (không thay đổi)

// ✅ Deep Copy cho nested objects
let complexObj = { 
  user: { name: "Tuấn", scores: [8, 9, 10] } 
};
let deepCopy = JSON.parse(JSON.stringify(complexObj)); // Deep copy
deepCopy.user.scores.push(11);
console.log(complexObj.user.scores); // [8, 9, 10] (không thay đổi)
\`\`\`

### 4. Scope Chain và Lexical Scoping
JavaScript sử dụng Lexical Scoping (Static Scoping), nghĩa là scope được xác định tại thời điểm viết code, không phải khi chạy.

\`\`\`javascript
let globalVar = "Global";

function outerFunction() {
  let outerVar = "Outer";
  
  function innerFunction() {
    let innerVar = "Inner";
    console.log(globalVar); // "Global" - tìm thấy ở global scope
    console.log(outerVar);  // "Outer" - tìm thấy ở outer scope
    console.log(innerVar);  // "Inner" - tìm thấy ở local scope
  }
  
  innerFunction();
}

outerFunction();
\`\`\`

### 5. Best Practices và Lưu ý
**Quy tắc vàng:**
- Luôn dùng \`const\` mặc định, chỉ dùng \`let\` khi cần thay đổi giá trị.
- Tránh dùng \`var\` trong code mới.
- Hiểu rõ TDZ để tránh lỗi runtime.
- Cẩn thận khi copy objects/arrays - dùng spread hoặc deep copy khi cần.

> **Lưu ý quan trọng:** Khi copy một Object, bạn thực chất chỉ đang copy địa chỉ vùng nhớ. Thay đổi ở bản copy sẽ làm thay đổi cả bản gốc nếu không dùng kỹ thuật "Deep Clone". Điều này là nguyên nhân của nhiều bug khó tìm trong JavaScript.
`
  },
  {
    id: 'js-async-mastery',
    title: 'Làm chủ Bất đồng bộ: Từ Callback Hell đến Async/Await',
    category: 'JavaScript',
    date: '2024-06-05',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Hành trình tiến hóa của xử lý bất đồng bộ trong JavaScript và cách viết code sạch với Async/Await.',
    content: `
### 1. Vấn đề của Callback Hell
Trước ES6, chúng ta phải lồng các hàm callback vào nhau để xử lý các tác vụ tuần tự, dẫn đến cấu trúc code hình "kim tự tháp" khó bảo trì và dễ lỗi. Đây là một trong những vấn đề lớn nhất của JavaScript cổ điển.

**Ví dụ Callback Hell:**
\`\`\`javascript
// ❌ Callback Hell - Code rất khó đọc và bảo trì
getUserData(userId, function(user) {
  getPosts(user.id, function(posts) {
    getComments(posts[0].id, function(comments) {
      getReplies(comments[0].id, function(replies) {
        // 4 tầng lồng nhau - rất khó debug!
        console.log(replies);
        // Xử lý lỗi ở đâu? Không có cách nào tốt!
      });
    });
  });
});
\`\`\`

**Vấn đề của Callback:**
- Khó đọc và hiểu flow của code
- Xử lý lỗi phức tạp (mỗi callback cần error handler riêng)
- Khó debug khi có nhiều tầng lồng nhau
- Dễ quên xử lý lỗi ở một callback nào đó

### 2. Sự ra đời của Promises
Promise đại diện cho một giá trị sẽ có trong tương lai (Thành công hoặc Thất bại). Nó giúp code phẳng hơn nhờ phương thức \`.then()\` và \`.catch()\`, giải quyết phần lớn vấn đề của callback.

**Cú pháp Promise:**
\`\`\`javascript
// Promise có 3 trạng thái: pending, fulfilled, rejected
const promise = new Promise((resolve, reject) => {
  // Async operation
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("Thành công!");
    } else {
      reject("Thất bại!");
    }
  }, 1000);
});

promise
  .then(result => console.log(result)) // "Thành công!"
  .catch(error => console.error(error)); // Nếu có lỗi
\`\`\`

**Promise Chain - Giải quyết Callback Hell:**
\`\`\`javascript
// ✅ Promise Chain - Code phẳng hơn nhiều
getUserData(userId)
  .then(user => {
    console.log("User:", user);
    return getPosts(user.id);
  })
  .then(posts => {
    console.log("Posts:", posts);
    return getComments(posts[0].id);
  })
  .then(comments => {
    console.log("Comments:", comments);
    return getReplies(comments[0].id);
  })
  .then(replies => {
    console.log("Replies:", replies);
  })
  .catch(error => {
    // Xử lý lỗi ở một chỗ duy nhất!
    console.error("Lỗi:", error);
  });
\`\`\`

**Promise.all() - Xử lý song song:**
\`\`\`javascript
// Chạy nhiều Promise cùng lúc và đợi tất cả hoàn thành
Promise.all([
  fetchUserData(userId),
  fetchUserPosts(userId),
  fetchUserComments(userId)
])
  .then(([user, posts, comments]) => {
    console.log("Tất cả dữ liệu:", { user, posts, comments });
  })
  .catch(error => {
    // Nếu một Promise thất bại, tất cả sẽ reject
    console.error("Lỗi:", error);
  });

// Promise.allSettled() - Đợi tất cả, kể cả khi có lỗi
Promise.allSettled([promise1, promise2, promise3])
  .then(results => {
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(\`Promise \${index} thành công:\`, result.value);
      } else {
        console.log(\`Promise \${index} thất bại:\`, result.reason);
      }
    });
  });
\`\`\`

### 3. Đỉnh cao Async/Await
Được giới thiệu trong ES2017, đây là "Syntactic Sugar" giúp chúng ta viết code bất đồng bộ trông giống hệt code đồng bộ, dễ đọc và dễ hiểu hơn rất nhiều.

**So sánh sự khác biệt:**
\`\`\`javascript
// ❌ Cách cũ với Promise
fetchData()
  .then(res => res.json())
  .then(data => {
    console.log(data);
    return processData(data);
  })
  .then(processed => {
    console.log(processed);
  })
  .catch(err => console.error(err));

// ✅ Cách hiện đại với Async/Await (Khuyên dùng)
async function getDisplayData() {
  try {
    const res = await fetchData();
    const data = await res.json();
    console.log(data);
    
    const processed = await processData(data);
    console.log(processed);
  } catch (err) {
    console.error("Lỗi khi tải dữ liệu:", err);
  }
}
\`\`\`

**Async/Await với Promise.all():**
\`\`\`javascript
// Xử lý song song với async/await
async function fetchAllUserData(userId) {
  try {
    const [user, posts, comments] = await Promise.all([
      fetchUserData(userId),
      fetchUserPosts(userId),
      fetchUserComments(userId)
    ]);
    
    return { user, posts, comments };
  } catch (error) {
    console.error("Lỗi khi tải dữ liệu:", error);
    throw error; // Re-throw để caller xử lý
  }
}
\`\`\`

**Xử lý lỗi chi tiết:**
\`\`\`javascript
async function robustDataFetch() {
  try {
    const response = await fetch('/api/data');
    
    // Kiểm tra HTTP status
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const data = await response.json();
    
    // Validate data
    if (!data || !data.success) {
      throw new Error("Dữ liệu không hợp lệ");
    }
    
    return data;
  } catch (error) {
    // Phân loại lỗi
    if (error instanceof TypeError) {
      console.error("Lỗi mạng:", error);
    } else if (error instanceof SyntaxError) {
      console.error("Lỗi parse JSON:", error);
    } else {
      console.error("Lỗi khác:", error);
    }
    return null; // Hoặc throw lại
  }
}
\`\`\`

### 4. Best Practices
**Luôn dùng try-catch với async/await:**
- Không bao giờ để async function không có error handling
- Luôn validate response trước khi sử dụng
- Sử dụng Promise.all() khi cần xử lý song song

**Tránh await trong vòng lặp:**
\`\`\`javascript
// ❌ Không nên: Chạy tuần tự (chậm)
for (const id of userIds) {
  const user = await fetchUser(id); // Chờ từng cái
}

// ✅ Nên: Chạy song song (nhanh)
const users = await Promise.all(
  userIds.map(id => fetchUser(id))
);
\`\`\`

> **Mẹo bảo mật:** Luôn sử dụng \`try...catch\` khi dùng \`await\` để tránh lỗi làm treo ứng dụng và rò rỉ thông tin stack trace ra ngoài frontend. Không bao giờ hiển thị error.stack trực tiếp cho người dùng cuối.
`
  },
  {
    id: 'js-es6-features',
    title: 'ES6+ Toàn tập: Những tính năng thay đổi cách chúng ta lập trình',
    category: 'JavaScript',
    date: '2024-06-10',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Tổng hợp những tính năng quan trọng nhất từ ES6 đến nay: Arrow Functions, Destructuring, Spread và Rest.',
    content: `
### 1. Arrow Functions và từ khóa "this"
Arrow function (\`() => {}\`) không chỉ giúp code ngắn gọn mà quan trọng hơn là nó không tạo ra scope riêng cho từ khóa \`this\`, giúp giải quyết vấn đề mất ngữ cảnh khi làm việc với class hoặc sự kiện.

**Cú pháp Arrow Function:**
\`\`\`javascript
// Cú pháp cơ bản
const add = (a, b) => a + b;

// Với một tham số, không cần dấu ngoặc
const double = x => x * 2;

// Với nhiều dòng, cần dấu ngoặc nhọn
const greet = (name) => {
  const message = \`Chào \${name}!\`;
  return message;
};

// So sánh với function thông thường
function addOld(a, b) {
  return a + b;
}
const addNew = (a, b) => a + b;
\`\`\`

**Vấn đề "this" với function thông thường:**
\`\`\`javascript
// ❌ Vấn đề với function thông thường
const student = {
  name: "Tuấn",
  subjects: ["Java", "JavaScript"],
  printSubjects: function() {
    this.subjects.forEach(function(subject) {
      // "this" ở đây không phải là student!
      console.log(\`\${this.name} học \${subject}\`); // undefined học Java
    });
  }
};

// ✅ Giải pháp với arrow function
const student2 = {
  name: "Tuấn",
  subjects: ["Java", "JavaScript"],
  printSubjects: function() {
    this.subjects.forEach(subject => {
      // "this" giữ nguyên context của student2
      console.log(\`\${this.name} học \${subject}\`); // Tuấn học Java ✅
    });
  }
};
\`\`\`

**Lưu ý quan trọng:**
- Arrow function không có \`arguments\` object
- Không thể dùng làm constructor (không có \`new\`)
- Không thể bind \`this\` (đã được bind lexical)

### 2. Destructuring: Giải nén dữ liệu cực nhanh
Bạn có thể trích xuất giá trị từ Array hoặc Object một cách trực quan, giúp code ngắn gọn và dễ đọc hơn rất nhiều.

**Destructuring Object:**
\`\`\`javascript
const user = { name: "Tuấn", age: 22, major: "Công nghệ phần mềm", email: "nhoctuan507@gmail.com" };

// Lấy thông tin nhanh chóng
const { name, major } = user;
console.log(\`Chào sinh viên \${name} chuyên ngành \${major}\`);

// Đổi tên biến
const { name: userName, age: userAge } = user;
console.log(userName, userAge);

// Giá trị mặc định
const { name, gpa = 0 } = user; // Nếu không có gpa, dùng 0

// Nested destructuring
const student = {
  info: { name: "Tuấn", id: "210001" },
  scores: [8, 9, 10]
};
const { info: { name, id }, scores: [first, second] } = student;
\`\`\`

**Destructuring Array:**
\`\`\`javascript
const scores = [8, 9, 10, 7];

// Lấy phần tử
const [first, second, third] = scores;
console.log(first, second, third); // 8, 9, 10

// Bỏ qua phần tử
const [first, , third] = scores; // Bỏ qua phần tử thứ 2

// Rest với array
const [first, ...rest] = scores;
console.log(rest); // [9, 10, 7]

// Swap giá trị
let a = 10, b = 20;
[a, b] = [b, a]; // a = 20, b = 10
\`\`\`

**Destructuring trong Function Parameters:**
\`\`\`javascript
// Thay vì
function greet(user) {
  console.log(\`Chào \${user.name}, bạn \${user.age} tuổi\`);
}

// Dùng destructuring
function greet({ name, age }) {
  console.log(\`Chào \${name}, bạn \${age} tuổi\`);
}

// Với giá trị mặc định
function createUser({ name = "Anonymous", age = 0, role = "user" } = {}) {
  return { name, age, role };
}
\`\`\`

### 3. Spread và Rest Operator (...)
Dấu ba chấm "thần thánh" có hai tác dụng quan trọng, giúp code JavaScript hiện đại và linh hoạt hơn rất nhiều.

**Spread Operator - Trải mảng/object:**
\`\`\`javascript
// Copy array
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // [1, 2, 3] - bản copy độc lập
arr2.push(4);
console.log(arr1); // [1, 2, 3] - không thay đổi

// Gộp arrays
const arr3 = [...arr1, 4, 5, ...arr2]; // [1, 2, 3, 4, 5, 1, 2, 3, 4]

// Copy object an toàn (Shallow Copy)
const user = { name: "Tuấn", age: 22 };
const updatedUser = { ...user, gpa: 3.8 }; // { name: "Tuấn", age: 22, gpa: 3.8 }

// Gộp objects
const defaults = { theme: "light", lang: "vi" };
const settings = { theme: "dark" };
const final = { ...defaults, ...settings }; // { theme: "dark", lang: "vi" }

// Clone nested object (cần cẩn thận - chỉ shallow)
const student = { 
  info: { name: "Tuấn", id: "210001" },
  scores: [8, 9, 10]
};
const cloned = { ...student };
cloned.scores.push(11);
console.log(student.scores); // [8, 9, 10, 11] - đã thay đổi!
\`\`\`

**Rest Operator - Gom tham số:**
\`\`\`javascript
// Nhận vô số tham số
function sum(...numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);
}
sum(1, 2, 3, 4, 5); // 15

// Rest trong destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(rest); // [3, 4, 5]

const { name, ...otherInfo } = { name: "Tuấn", age: 22, major: "CNPM" };
console.log(otherInfo); // { age: 22, major: "CNPM" }
\`\`\`

### 4. Template Literals
Template literals cho phép nhúng biểu thức và multi-line strings một cách dễ dàng.

\`\`\`javascript
const name = "Tuấn";
const age = 22;

// Thay vì: "Chào " + name + ", bạn " + age + " tuổi"
const greeting = \`Chào \${name}, bạn \${age} tuổi\`;

// Multi-line
const message = \`
  Xin chào \${name}!
  Bạn đang học chuyên ngành Công nghệ phần mềm.
  Chúc bạn học tốt!
\`;

// Tagged templates (advanced)
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    return result + str + (values[i] ? \`<mark>\${values[i]}</mark>\` : '');
  }, '');
}
\`\`\`

### 5. Default Parameters
Giá trị mặc định cho tham số function, giúp code rõ ràng hơn.

\`\`\`javascript
// Thay vì
function greet(name) {
  name = name || "Anonymous";
  console.log(\`Chào \${name}\`);
}

// Dùng default parameter
function greet(name = "Anonymous", greeting = "Xin chào") {
  console.log(\`\${greeting}, \${name}!\`);
}

greet("Tuấn"); // "Xin chào, Tuấn!"
greet("Tuấn", "Chào mừng"); // "Chào mừng, Tuấn!"
greet(); // "Xin chào, Anonymous!"
\`\`\`

### 6. Best Practices
- Luôn dùng arrow function cho callbacks ngắn
- Dùng destructuring để code rõ ràng hơn
- Spread operator cho copy và merge
- Template literals thay vì string concatenation
- Default parameters thay vì kiểm tra undefined

> **Lưu ý:** Spread operator chỉ tạo shallow copy. Với nested objects/arrays, cần dùng deep copy (JSON.parse/stringify hoặc thư viện như Lodash).
`
  },
  {
    id: 'js-closures-security',
    title: 'Closures và Data Privacy trong JavaScript',
    category: 'JavaScript',
    date: '2024-06-15',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Khám phá sức mạnh của Closures trong việc tạo ra các biến Private, ngăn chặn truy cập trái phép từ bên ngoài.',
    content: `
### 1. Closures là gì?
Closure là một hàm ghi nhớ môi trường (scope) nơi nó được tạo ra, ngay cả khi hàm cha đã thực thi xong và bị xóa khỏi stack. Đây là một trong những khái niệm quan trọng nhất trong JavaScript.

**Ví dụ cơ bản:**
\`\`\`javascript
function outerFunction() {
  let outerVariable = "Tôi ở ngoài";
  
  function innerFunction() {
    console.log(outerVariable); // Có thể truy cập outerVariable
  }
  
  return innerFunction; // Trả về function, không phải kết quả
}

const myFunction = outerFunction();
myFunction(); // "Tôi ở ngoài" - vẫn truy cập được outerVariable!
\`\`\`

**Tại sao Closure quan trọng?**
- Cho phép tạo "private variables" trong JavaScript
- Giúp tạo module pattern
- Cho phép function "nhớ" context của nó
- Cơ sở cho nhiều pattern quan trọng

### 2. Ứng dụng trong Bảo mật thông tin
Trong JavaScript thuần, không có từ khóa \`private\` (trước khi có class field #). Closure là cách duy nhất để bảo vệ dữ liệu bên trong một module, ngăn chặn truy cập trái phép.

**Ví dụ về Module Bảo mật:**
\`\`\`javascript
function createSecureVault() {
  let secretKey = "X-SECRET-123"; // Biến này không thể truy cập từ bên ngoài
  let accessCount = 0;

  return {
    getKey: function(pass) {
      if (pass === "admin123") {
        accessCount++;
        return secretKey;
      }
      return "Quyền truy cập bị từ chối!";
    },
    getAccessCount: function() {
      return accessCount;
    },
    resetCount: function() {
      accessCount = 0;
    }
  };
}

const myVault = createSecureVault();
console.log(myVault.getKey("admin123")); // X-SECRET-123
console.log(myVault.secretKey); // undefined -> Dữ liệu đã được bảo vệ!
console.log(myVault.getAccessCount()); // 1
\`\`\`

**Module Pattern với Closure:**
\`\`\`javascript
const UserModule = (function() {
  // Private variables
  let users = [];
  let nextId = 1;

  // Private functions
  function validateUser(user) {
    return user.name && user.email;
  }

  // Public API
  return {
    addUser: function(user) {
      if (validateUser(user)) {
        user.id = nextId++;
        users.push(user);
        return true;
      }
      return false;
    },
    getUsers: function() {
      return [...users]; // Trả về copy, không phải reference
    },
    getUserById: function(id) {
      return users.find(u => u.id === id);
    },
    deleteUser: function(id) {
      users = users.filter(u => u.id !== id);
    }
  };
})();

// Sử dụng
UserModule.addUser({ name: "Tuấn", email: "nhoctuan507@gmail.com" });
console.log(UserModule.getUsers());
// Không thể truy cập users, nextId, validateUser từ bên ngoài!
\`\`\`

### 3. Closure trong Event Handlers
Closure rất hữu ích khi làm việc với event handlers và callbacks.

\`\`\`javascript
// Vấn đề với vòng lặp và event
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // In ra: 3, 3, 3 (không phải 0, 1, 2)
  }, 100);
}

// Giải pháp với Closure
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // In ra: 0, 1, 2 ✅
  }, 100);
}

// Hoặc dùng IIFE (Immediately Invoked Function Expression)
for (var i = 0; i < 3; i++) {
  (function(index) {
    setTimeout(function() {
      console.log(index); // In ra: 0, 1, 2 ✅
    }, 100);
  })(i);
}
\`\`\`

### 4. Closure và Memory Management
Closure có thể gây memory leak nếu không cẩn thận, vì nó giữ reference đến outer scope.

\`\`\`javascript
// ❌ Có thể gây memory leak
function attachHandler() {
  const largeData = new Array(1000000).fill("data");
  
  document.getElementById("button").addEventListener("click", function() {
    // Closure giữ reference đến largeData
    console.log("Clicked");
  });
  // largeData không được giải phóng ngay cả khi function kết thúc!
}

// ✅ Giải pháp: Xóa event listener khi không cần
function attachHandlerSafe() {
  const button = document.getElementById("button");
  const handler = function() {
    console.log("Clicked");
  };
  
  button.addEventListener("click", handler);
  
  // Khi cần xóa
  // button.removeEventListener("click", handler);
}
\`\`\`

### 5. Advanced Closure Patterns
**Currying với Closure:**
\`\`\`javascript
function multiply(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    };
  };
}

const result = multiply(2)(3)(4); // 24

// Hoặc dùng arrow function
const multiply = a => b => c => a * b * c;
\`\`\`

**Function Factory:**
\`\`\`javascript
function createCounter(initialValue = 0) {
  let count = initialValue;
  
  return {
    increment: () => ++count,
    decrement: () => --count,
    getValue: () => count,
    reset: () => { count = initialValue; }
  };
}

const counter1 = createCounter(10);
const counter2 = createCounter(5);

console.log(counter1.increment()); // 11
console.log(counter2.increment()); // 6
// Mỗi counter có state riêng biệt!
\`\`\`

### 6. Best Practices
- Sử dụng Closure để tạo private variables và methods
- Cẩn thận với memory leaks khi dùng Closure với event handlers
- Closure rất hữu ích cho module pattern và function factories
- Hiểu rõ scope chain để tránh bugs

> **Góc nhìn Công nghệ phần mềm:** Việc sử dụng Closures giúp hạn chế tấn công rò rỉ dữ liệu thông qua các script can thiệp vào bộ nhớ toàn cục (Global Namespace). Đây là một trong những kỹ thuật quan trọng để xây dựng code an toàn và dễ bảo trì.
`
  },
  {
    id: 'js-engine-optimization',
    title: 'Bên trong JS Engine: Cách trình duyệt tối ưu hóa code của bạn',
    category: 'JavaScript',
    date: '2024-06-20',
    image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Tìm hiểu về Call Stack, Event Loop, Microtask Queue và cách viết code chuẩn hiệu năng.',
    content: `
### 1. Cơ chế Single Threaded
JavaScript là ngôn ngữ đơn luồng. Nó chỉ có một Call Stack để thực hiện công việc tại một thời điểm. Vậy làm sao nó có thể xử lý hàng ngàn request cùng lúc? Câu trả lời nằm ở **Event Loop** - một cơ chế thông minh cho phép JavaScript xử lý bất đồng bộ.

**Call Stack là gì?**
Call Stack là nơi JavaScript engine lưu trữ các function calls. Khi một function được gọi, nó được đẩy vào stack. Khi function kết thúc, nó được pop ra khỏi stack.

\`\`\`javascript
function first() {
  console.log("1");
  second();
  console.log("4");
}

function second() {
  console.log("2");
  third();
  console.log("3");
}

function third() {
  console.log("Done");
}

first();
// Output: 1, 2, Done, 3, 4
// Call Stack: first -> second -> third
\`\`\`

**Vấn đề với Single Thread:**
- Nếu một function chạy quá lâu, nó sẽ block toàn bộ thread
- UI sẽ bị "đơ" nếu có code nặng chạy trên main thread
- Cần cơ chế để xử lý các tác vụ bất đồng bộ

### 2. Call Stack & Task Queues
JavaScript engine sử dụng nhiều queue khác nhau để quản lý các tác vụ bất đồng bộ.

**Call Stack:**
- Nơi chứa các hàm đang được thực hiện
- LIFO (Last In First Out) - phần tử vào sau ra trước
- Chỉ có một Call Stack duy nhất

**Task Queue (Macrotask Queue):**
- Chứa các tác vụ từ: \`setTimeout\`, \`setInterval\`, I/O operations, UI rendering
- Được xử lý sau khi Call Stack trống
- Mỗi lần Event Loop chỉ xử lý một macrotask

**Microtask Queue:**
- Chứa các tác vụ từ: \`Promise.then/catch/finally\`, \`queueMicrotask\`, \`MutationObserver\`
- Được ưu tiên xử lý trước macrotask
- Tất cả microtasks được xử lý hết trước khi chuyển sang macrotask tiếp theo

**Event Loop Flow:**
\`\`\`javascript
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");

// Output: 1, 4, 3, 2
// Giải thích:
// 1. "1" - sync code
// 2. setTimeout đưa callback vào Macrotask Queue
// 3. Promise đưa callback vào Microtask Queue
// 4. "4" - sync code
// 5. Call Stack trống, xử lý Microtask Queue -> "3"
// 6. Xử lý Macrotask Queue -> "2"
\`\`\`

> **Quy tắc vàng:** Microtask luôn được ưu tiên xử lý trước Macrotask sau khi Call Stack trống. Điều này giải thích tại sao Promise callbacks chạy trước setTimeout callbacks.

### 3. Tối ưu hóa hiệu năng
Để tránh làm "đơ" UI của người dùng, bạn không nên thực hiện các vòng lặp quá nặng trên luồng chính. Có nhiều kỹ thuật để xử lý vấn đề này.

**Vấn đề với code nặng:**
\`\`\`javascript
// ❌ Không nên: Vòng lặp 1 tỷ lần trực tiếp - Block UI
function heavyComputation() {
  let sum = 0;
  for(let i = 0; i < 1e9; i++) {
    sum += i; // UI sẽ bị đơ trong vài giây
  }
  return sum;
}
\`\`\`

**Giải pháp 1: Chia nhỏ tác vụ với setTimeout:**
\`\`\`javascript
// ✅ Chia nhỏ tác vụ
function heavyComputationAsync(callback) {
  let sum = 0;
  let i = 0;
  const chunkSize = 1000000; // Xử lý 1 triệu lần mỗi chunk
  
  function processChunk() {
    const end = Math.min(i + chunkSize, 1e9);
    for (; i < end; i++) {
      sum += i;
    }
    
    if (i < 1e9) {
      // Chuyển sang chunk tiếp theo ở event loop tiếp theo
      setTimeout(processChunk, 0);
    } else {
      callback(sum);
    }
  }
  
  processChunk();
}

heavyComputationAsync(result => {
  console.log("Kết quả:", result);
  // UI vẫn responsive trong quá trình tính toán!
});
\`\`\`

**Giải pháp 2: Web Workers:**
\`\`\`javascript
// main.js
const worker = new Worker('worker.js');

worker.postMessage({ start: 0, end: 1e9 });

worker.onmessage = function(e) {
  console.log("Kết quả:", e.data);
};

// worker.js
self.onmessage = function(e) {
  const { start, end } = e.data;
  let sum = 0;
  for (let i = start; i < end; i++) {
    sum += i;
  }
  self.postMessage(sum);
};
\`\`\`

**Giải pháp 3: requestAnimationFrame (cho animations):**
\`\`\`javascript
// ✅ Tối ưu cho animations
function animate() {
  // Cập nhật animation
  updateAnimation();
  
  // Đợi frame tiếp theo
  requestAnimationFrame(animate);
}

animate();
\`\`\`

### 4. Memory Management và Garbage Collection
JavaScript engine tự động quản lý memory thông qua Garbage Collector. Hiểu cách nó hoạt động giúp tránh memory leaks.

**Memory Leaks phổ biến:**
\`\`\`javascript
// ❌ Closure giữ reference không cần thiết
function attachHandler() {
  const largeData = new Array(1000000).fill("data");
  
  document.getElementById("button").onclick = function() {
    // Closure giữ reference đến largeData
    console.log("Clicked");
  };
  // largeData không được giải phóng!
}

// ✅ Giải pháp: Xóa reference khi không cần
function attachHandlerSafe() {
  const button = document.getElementById("button");
  const handler = function() {
    console.log("Clicked");
  };
  button.onclick = handler;
  
  // Khi cần cleanup
  // button.onclick = null;
}
\`\`\`

### 5. Best Practices
**Tối ưu hiệu năng:**
- Tránh blocking main thread với code nặng
- Sử dụng Web Workers cho tính toán nặng
- Chia nhỏ tác vụ lớn thành các chunk nhỏ
- Sử dụng \`requestAnimationFrame\` cho animations

**Tránh memory leaks:**
- Xóa event listeners khi không cần
- Tránh closure giữ reference không cần thiết
- Sử dụng WeakMap/WeakSet khi có thể
- Cleanup timers và intervals

**Tối ưu code:**
- Tránh tạo object/array không cần thiết trong vòng lặp
- Sử dụng \`documentFragment\` khi thao tác DOM nhiều
- Debounce/throttle cho event handlers thường xuyên
- Lazy loading cho resources lớn

> **Lưu ý:** Hiểu rõ Event Loop giúp bạn viết code hiệu quả hơn và tránh các vấn đề về performance. Luôn test performance trên các thiết bị thực tế, không chỉ trên máy dev mạnh.
`
  },
  {
    id: 'java-multithreading-adv',
    title: 'Đa luồng trong Java: Synchronization và Deadlock',
    category: 'Java',
    date: '2024-05-10',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Làm thế nào để tránh xung đột dữ liệu khi nhiều luồng cùng truy cập một tài nguyên?',
    content: `
### Synchronization là gì?
Trong môi trường đa luồng, khi nhiều Thread cùng ghi vào một biến, dữ liệu có thể bị sai lệch (Race Condition). Từ khóa \`synchronized\` giúp đảm bảo chỉ có một Thread được truy cập tại một thời điểm.

**Ví dụ Code:**
\`\`\`java
class Counter {
    private int count = 0;
    public synchronized void increment() {
        count++;
    }
    public int getCount() { return count; }
}
\`\`\`

### Hiểm họa Deadlock
Deadlock xảy ra khi Thread A giữ tài nguyên 1 và đợi tài nguyên 2, trong khi Thread B giữ tài nguyên 2 và đợi tài nguyên 1. Cả hai sẽ đứng đợi nhau mãi mãi.

**Lời khuyên:** Luôn thiết kế thứ tự lấy khóa (lock ordering) đồng nhất để tránh vòng lặp chờ đợi.
`
  },
  {
    id: 'java-security-spring',
    title: 'Bảo mật Spring Boot: Chống lại SQL Injection và XSS',
    category: 'Java',
    date: '2024-05-20',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Hướng dẫn bảo vệ ứng dụng Java Spring Boot trước các lỗ hổng bảo mật phổ biến nhất.',
    content: `
### 1. Phòng chống SQL Injection
SQL Injection là lỗ hổng cho phép kẻ tấn công can thiệp vào các truy vấn SQL. Trong Spring Data JPA, chúng ta được bảo vệ mặc định nếu sử dụng tham số hóa.

**Ví dụ Code An toàn:**
\`\`\`java
@Query("SELECT u FROM User u WHERE u.username = :name")
User findByUsername(@Param("name") String username);
\`\`\`

### 2. Chống lại XSS (Cross-Site Scripting)
XSS xảy ra khi dữ liệu người dùng nhập vào được hiển thị trực tiếp lên web mà không qua kiểm duyệt.
- Sử dụng Thymeleaf hoặc các template engine hiện đại có cơ chế tự động escape HTML.
- Sử dụng thư viện **OWASP Java HTML Sanitizer** nếu cần xử lý HTML thô.
`
  },
  {
    id: 'js-array-methods-functional',
    title: 'Array Methods và Functional Programming: Viết code sạch hơn với Map, Filter, Reduce',
    category: 'JavaScript',
    date: '2024-06-25',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Khám phá sức mạnh của các phương thức Array trong JavaScript và cách áp dụng Functional Programming để code ngắn gọn, dễ đọc hơn.',
    content: `
### 1. Map: Biến đổi từng phần tử
\`map()\` tạo ra một mảng mới với kết quả của việc gọi hàm cho từng phần tử. Đây là cách thay thế cho vòng lặp \`for\` truyền thống.

\`\`\`javascript
// ❌ Cách cũ với for loop
const numbers = [1, 2, 3, 4, 5];
const doubled = [];
for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}

// ✅ Cách hiện đại với map
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Ví dụ thực tế: Chuyển đổi danh sách sinh viên
const students = [
  { name: "Tuấn", score: 8.5 },
  { name: "Nam", score: 9.0 }
];
const studentNames = students.map(student => student.name);
\`\`\`

### 2. Filter: Lọc phần tử theo điều kiện
\`filter()\` tạo ra một mảng mới chứa các phần tử thỏa mãn điều kiện. Rất hữu ích khi cần tìm kiếm hoặc lọc dữ liệu.

\`\`\`javascript
const scores = [5, 7, 8, 9, 6, 10, 4];
const passingScores = scores.filter(score => score >= 7);
console.log(passingScores); // [7, 8, 9, 10]

// Lọc sinh viên có điểm cao
const topStudents = students.filter(student => student.score >= 8.5);
\`\`\`

### 3. Reduce: Gom nhóm và tính toán
\`reduce()\` là phương thức mạnh mẽ nhất, có thể thay thế cả \`map\` và \`filter\`. Nó "gộp" tất cả phần tử thành một giá trị duy nhất.

\`\`\`javascript
// Tính tổng điểm
const totalScore = scores.reduce((sum, score) => sum + score, 0);
console.log(totalScore); // 49

// Tìm điểm cao nhất
const maxScore = scores.reduce((max, score) => score > max ? score : max, 0);

// Nhóm đối tượng theo thuộc tính
const studentsByGrade = students.reduce((acc, student) => {
  const grade = student.score >= 8 ? 'A' : 'B';
  if (!acc[grade]) acc[grade] = [];
  acc[grade].push(student);
  return acc;
}, {});
\`\`\`

### 4. Kết hợp các phương thức: Method Chaining
Sức mạnh thực sự nằm ở việc kết hợp các phương thức lại với nhau:

\`\`\`javascript
// Tìm tên các sinh viên có điểm >= 8.5, sau đó viết hoa
const topStudentNames = students
  .filter(student => student.score >= 8.5)
  .map(student => student.name.toUpperCase());

// Tính điểm trung bình của sinh viên đạt điểm cao
const avgTopScore = students
  .filter(s => s.score >= 8)
  .map(s => s.score)
  .reduce((sum, score, index, array) => {
    sum += score;
    return index === array.length - 1 ? sum / array.length : sum;
  }, 0);
\`\`\`

### 5. So sánh với vòng lặp truyền thống
**Ưu điểm của Functional Programming:**
- Code ngắn gọn, dễ đọc hơn
- Không thay đổi mảng gốc (immutable)
- Dễ test và debug
- Tự mô tả ý định của code

> **Lưu ý bảo mật:** Khi xử lý dữ liệu từ API, luôn validate và sanitize trước khi dùng \`map\` hoặc \`filter\` để tránh lỗ hổng XSS.
`
  },
  {
    id: 'js-error-handling-debugging',
    title: 'Error Handling và Debugging: Xử lý lỗi chuyên nghiệp trong JavaScript',
    category: 'JavaScript',
    date: '2024-06-30',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Học cách xử lý lỗi đúng cách với try-catch, Promise rejection và các kỹ thuật debug hiệu quả để code robust hơn.',
    content: `
### 1. Try-Catch: Xử lý lỗi đồng bộ
\`try-catch\` là cơ chế cơ bản nhất để bắt và xử lý lỗi trong JavaScript. Luôn sử dụng khi làm việc với code có thể gây lỗi.

\`\`\`javascript
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Không thể chia cho 0!");
    }
    return a / b;
  } catch (error) {
    console.error("Lỗi chia số:", error.message);
    return null; // Hoặc throw lại nếu cần
  }
}

// Sử dụng
const result = divide(10, 0);
if (result === null) {
  console.log("Phép tính không hợp lệ");
}
\`\`\`

### 2. Xử lý lỗi với Async/Await
Khi làm việc với async code, việc xử lý lỗi trở nên quan trọng hơn vì lỗi có thể xảy ra ở bất kỳ bước nào.

\`\`\`javascript
// ❌ Không nên: Bỏ qua xử lý lỗi
async function fetchUserData(userId) {
  const response = await fetch(\`/api/users/\${userId}\`);
  const data = await response.json();
  return data;
}

// ✅ Nên: Luôn có try-catch
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error("Lỗi khi tải dữ liệu:", error);
    return { success: false, error: error.message };
  }
}
\`\`\`

### 3. Promise Rejection và .catch()
Với Promise, bạn có thể dùng \`.catch()\` để xử lý lỗi mà không cần try-catch:

\`\`\`javascript
fetch('/api/data')
  .then(response => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  })
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    console.error('Có lỗi xảy ra:', error);
    // Hiển thị thông báo cho người dùng
    showErrorMessage('Không thể tải dữ liệu. Vui lòng thử lại sau.');
  });
\`\`\`

### 4. Custom Error Classes
Tạo các lớp lỗi tùy chỉnh giúp code dễ debug và xử lý lỗi chính xác hơn:

\`\`\`javascript
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}

class NetworkError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = 'NetworkError';
    this.statusCode = statusCode;
  }
}

// Sử dụng
function validateEmail(email) {
  if (!email.includes('@')) {
    throw new ValidationError('Email không hợp lệ', 'email');
  }
}

try {
  validateEmail('invalid-email');
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(\`Lỗi validation ở trường \${error.field}: \${error.message}\`);
  }
}
\`\`\`

### 5. Debugging Techniques
**Console Methods:**
\`\`\`javascript
// console.log - In thông tin cơ bản
console.log('Value:', value);

// console.error - In lỗi (màu đỏ)
console.error('Error occurred:', error);

// console.warn - Cảnh báo (màu vàng)
console.warn('This might cause issues');

// console.table - Hiển thị dạng bảng (rất hữu ích!)
console.table(students);

// console.group - Nhóm các log lại
console.group('User Data');
console.log('Name:', user.name);
console.log('Email:', user.email);
console.groupEnd();
\`\`\`

**Debugger Statement:**
\`\`\`javascript
function complexFunction(data) {
  debugger; // Dừng tại đây khi mở DevTools
  // Code của bạn...
  return result;
}
\`\`\`

### 6. Best Practices
**Luôn xử lý lỗi:**
- Không bao giờ để lỗi "unhandled" trong production
- Luôn có fallback cho các thao tác quan trọng
- Log lỗi để debug nhưng không expose thông tin nhạy cảm

**Thông báo lỗi thân thiện:**
\`\`\`javascript
try {
  await saveUserData(data);
} catch (error) {
  // ❌ Không nên: Hiển thị lỗi kỹ thuật
  alert(\`Error: \${error.stack}\`);
  
  // ✅ Nên: Thông báo dễ hiểu
  alert('Không thể lưu dữ liệu. Vui lòng kiểm tra kết nối và thử lại.');
  console.error('Technical error:', error); // Log chi tiết cho dev
}
\`\`\`

> **Góc nhìn An ninh mạng:** Không bao giờ log hoặc hiển thị thông tin nhạy cảm (passwords, tokens, API keys) trong error messages. Điều này có thể bị khai thác bởi kẻ tấn công.
`
  }
];
