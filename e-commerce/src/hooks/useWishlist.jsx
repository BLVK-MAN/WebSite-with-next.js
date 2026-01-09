import { useAppDispatch, useAppSelector } from '../store/hooks';
import { toggleWishlist, removeFromWishlist } from '../store/wishlistSlice';
export const useWishlist = () => {
  const dispatch = useAppDispatch();
  const {
    items
  } = useAppSelector(state => state.wishlist);
  const isInWishlist = id => items.some(item => item.id === id);
  return {
    items,
    isInWishlist,
    toggle: product => dispatch(toggleWishlist(product)),
    remove: id => dispatch(removeFromWishlist(id))
  };
};