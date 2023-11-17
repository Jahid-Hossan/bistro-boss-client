
import toast from 'react-hot-toast';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from './../../hooks/useAuth';
import useCart from '../../hooks/useCart';

const FoodCard = ({ item }) => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()

    const { name, image, price, recipe, _id } = item;


    const handleOrder = () => {
        if (user && user.email) {
            const cartItem = {
                email: user.email,
                menuId: _id,
                name,
                image,
                price
            }
            axiosSecure.post('/cart', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        toast.success(`${name} added to your cart`)
                        refetch()
                    }

                })
        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleOrder} className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;