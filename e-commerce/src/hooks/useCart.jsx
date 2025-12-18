import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addToCart, removeFromCart, updateQuantity, toggleCart, setCartOpen, clearCart } from '../store/cartSlice';
export const useCart = () => {
  const dispatch = useAppDispatch();
  const {
    items,
    isOpen
  } = useAppSelector(state => state.cart);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return {
    items,
    isOpen,
    totalItems,
    totalPrice,
    addItem: product => dispatch(addToCart(product)),
    removeItem: id => dispatch(removeFromCart(id)),
    updateItemQuantity: (id, quantity) => dispatch(updateQuantity({
      id,
      quantity
    })),
    toggle: () => dispatch(toggleCart()),
    setOpen: open => dispatch(setCartOpen(open)),
    clear: () => dispatch(clearCart())
  };
};