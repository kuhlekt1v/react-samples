import { CartItem } from '../CartItem/CartItem';

// Styles.
import { Wrapper } from './Cart.styles';

//Types.
import { CartItemType } from '../App';

type Props = {
	cartItems: CartItemType[];
	addToCart: (clickedItem: CartItemType) => void;
	removeFromCart: (id: number) => void;
};

export const Cart = ({ cartItems, addToCart, removeFromCart }: Props) => {
	const calculateTotal = (items: CartItemType[]) =>
		items.reduce(
			(accumulator: number, item) => accumulator + item.amount * item.price,
			0
		);

	return (
		<Wrapper>
			<h2>Your Shopping Cart</h2>
			{cartItems.length === 0 ? <p>No items in cart.</p> : null}
			{cartItems.map(item => (
				<CartItem
					key={item.id}
					item={item}
					addToCart={addToCart}
					removeFromCart={removeFromCart}
				/>
			))}
			<h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
		</Wrapper>
	);
};
