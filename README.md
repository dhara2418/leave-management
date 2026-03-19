# 💼 Leave Management System

A simple Leave Management System built using React, Redux Toolkit, and Tailwind CSS.
This project allows users to apply for leave, view leave records, and delete them easily.

---

## 🚀 Features

* 📝 Apply Leave Form (Employee Name, Type, Dates, Reason)
* 📋 View All Applied Leaves
* ❌ Delete Leave
* ⚡ Real-time UI update using Redux
* 🎨 Clean UI with Tailwind CSS
* ✔ Form Validation (required fields)

---

## Screenshot
---

<img width="1913" height="842" alt="Screenshot 2026-03-19 124849" src="https://github.com/user-attachments/assets/71058727-81b5-4e95-8bdf-d2fde6c868f0" />

---

## 🛠️ Technologies Used

* React JS (Functional Components & Hooks)
* Redux Toolkit (State Management)
* Tailwind CSS (Styling)
* Vite (Fast Development Server)

---

## 📁 Project Structure

```
src/
│
├── app/
│   └── store.js              # Redux store configuration
│
├── features/
│   └── leaveSlice.js        # Redux slice (add & delete leave)
│
├── components/
│   ├── AddLeave.jsx         # Form to apply leave
│   └── LeaveList.jsx        # Display & delete leaves
│
├── App.jsx                  # Main UI layout
├── main.jsx                 # Entry point with Provider
└── index.css                # Tailwind import

---

## 🧠 How It Works

* `AddLeave.jsx`

  * Uses `useState` to manage form data
  * Uses `useDispatch` to send data to Redux store
  * Adds unique ID using `Date.now()`

* `leaveSlice.js`

  * Stores all leaves in `state.leaves`
  * `addLeave` → adds new leave
  * `deleteLeave` → removes leave

* `LeaveList.jsx`

  * Uses `useSelector` to get leaves from store
  * Displays all leave entries
  * Delete button removes specific leave

---

## 📌 Example Flow

1. User fills the form
2. Clicks **Apply Leave**
3. Data goes to Redux store
4. Leave appears in list instantly
5. User can delete it anytime

---

## 🔮 Future Improvements

* ✏️ Edit Leave Feature
* 💾 Save data in LocalStorage
* 🔐 Login System
* 📊 Dashboard UI

---

## 👩‍💻 Author

**Dhara Parekh**

---

## 📄 License

This project is for learning and practice purposes.
