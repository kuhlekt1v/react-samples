import { useState } from 'react';
import { useQuery } from 'react-query';

// Components.
import { Item } from './Item/Item';
import { Cart } from './Cart/Cart';
// Material-UI components.
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

// Styles.
import { Wrapper, StyledButton } from './App.styles';
import { isTypeNode } from 'typescript';

// Types.
export type CartItemType = {
	id: number;
	category: string;
	description: string;
	image: string;
	price: number;
	title: string;
	amount: number;
};

// Fetch FakeAPI.
const getProducts = async (): Promise<CartItemType[]> =>
	await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
	const [cartOpen, setCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([] as CartItemType[]);

	const { data, isLoading, error } = useQuery<CartItemType[]>(
		'products',
		getProducts
	);
	console.log(data);

	// Reducer function to count tototal # of items in cart.
	const getTotalItems = (items: CartItemType[]) =>
		items.reduce((accumulator: number, item) => accumulator + item.amount, 0);

	const handleAddToCart = (clickedItem: CartItemType) => {
		setCartItems(prev => {
			// 1. Is the item already added in the cart?
			// Check if item exists in previous state.
			const isItemInCart = prev.find(item => item.id === clickedItem.id);

			// If in cart increment account by 1.
			if (isItemInCart) {
				return prev.map(item =>
					item.id === clickedItem.id
						? { ...item, amount: item.amount + 1 }
						: item
				);
			}

			// First time item is added. Add item to cart and set amount to 1.
			return [...prev, { ...clickedItem, amount: 1 }];
		});
	};

	const handleRemoveFromCart = (id: number) => {
		setCartItems(prev =>
			prev.reduce((accumulator, item) => {
				if (item.id === id) {
					if (item.amount === 1) return accumulator;
					return [...accumulator, { ...item, amount: item.amount - 1 }];
				} else {
					return [...accumulator, item];
				}
			}, [] as CartItemType[])
		);
	};

	// Display Material-UI linear progress bar if something is loading.
	if (isLoading) return <LinearProgress />;

	// Display simple message if there is an error.
	if (error) return <div>Something went wrong...</div>;

	return (
		<Wrapper>
			<Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
				<Cart
					cartItems={cartItems}
					addToCart={handleAddToCart}
					removeFromCart={handleRemoveFromCart}
				/>
			</Drawer>
			<StyledButton onClick={() => setCartOpen(true)}>
				<Badge badgeContent={getTotalItems(cartItems)} color='error'>
					<AddShoppingCartIcon />
				</Badge>
			</StyledButton>
			<Grid container spacing={3}>
				{data?.map(item => (
					<Grid item key={item.id} xs={12} sm={4}>
						{/* Component from Item/Item.tsx */}
						<Item item={item} handleAddToCart={handleAddToCart} />
					</Grid>
				))}
			</Grid>
		</Wrapper>
	);
};

export default App;
