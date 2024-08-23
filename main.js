import { createRoot } from "react-dom/client"
import App from "./App"
import { Provider } from "react-redux"
import { store } from "./store/script"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import { produce } from "immer"

const router = createBrowserRouter([{
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/cart",
            element: <Cart />
        }
    ]
}])

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
)

const users = [
    {
        name: "Tanuja",
        age: 22
    },
    {
        name: "Paras",
        age: 23
    },
    {
        name: "Gun",
        age: 21
    }
]

const newUser = produce(users, (usersCopy) => {
    console.log(usersCopy)
    usersCopy[1].age = 25
})
console.log(newUser)

