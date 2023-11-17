import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../../hooks/useCart";

const Cart = () => {

    const [cart] = useCart();

    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    console.log(totalPrice)

    return (
        <div className="w-full">
            <div className="flex justify-evenly items-center">
                <h2 className="text-3xl font-bold">Total Order: {cart.length}</h2>
                <h2 className="text-3xl font-bold">Total Price: ${totalPrice}</h2>
                <button className="btn btn-ghost bg-orange-400 text-2xl font-bold">PAY</button>
            </div>
            <div className="mt-4">
                <div className=" ">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-orange-400 ">
                            <tr className="">
                                <th>
                                    #
                                </th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, idx) => <tr key={idx}>
                                    <th>
                                        <label>
                                            {idx + 1}
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h2>{item.name}</h2>
                                    </td>
                                    <td>{item.price}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs"><FaTrashAlt></FaTrashAlt></button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;