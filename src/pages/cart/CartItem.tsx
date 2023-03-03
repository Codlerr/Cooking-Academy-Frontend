import { FC, memo, useCallback, useEffect, useState } from "react";
import instance from "../../API/api_instance";
import { Response } from "../../API/services/types";
import useToggle from "../../hooks/useToggle";
import useAppDispatch from "../../redux/hooks/useAppDispatch";
import { deleteFromCart } from "../../redux/thunks/cartThunk";

let Pic =
	"https://res.cloudinary.com/dvbplh4z9/image/upload/v1671270925/Cooking%20Academy%20Assets/cooking%20class/Rectangle_167_qkjplb.webp";

export interface CourseData {
	image: string;
	instructorName: string;
	about: string;
	unit: number;
	lesson: number;
	task: number;
	subscriptionCount: number;
	_id: string;
	name: string;
	duration: string;
	price: number;
	createdBy: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
	isSubscribed: boolean;
}

const fetchItemDetailsService = async (itemId: string) => {
	const res = instance.get<Response<{ course: CourseData }>>(
		`student/course/${itemId}`
	);
	return res;
};

interface CartItemProps {
	itemId: string;
}

const CartItem: FC<CartItemProps> = ({ itemId }) => {
	const [itemData, setItemData] = useState<CourseData | null>(null);
	const [fetching, setFetching] = useToggle(false);
	useEffect(() => {
		setFetching();
		fetchItemDetailsService(itemId)
			.then((res) => {
				console.log(res.data.data);
				setItemData(res.data.data.course);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setFetching();
			});
	}, [itemId, setFetching]);

	const dispatch = useAppDispatch();

	const [deleting, setDeleting] = useToggle(false);

	const handleDeleteFromCart = useCallback(() => {
		setDeleting();
		dispatch(deleteFromCart(itemId)).finally(() => {
			setDeleting();
		});
	}, [dispatch, itemId, setDeleting]);

	if (fetching) {
		// Show loading indicator
	}

	if (!itemData) {
		return null;
	}

	return (
		<div className="grid gap-3 lg:gap-0 grid-cols-1 md:grid-cols-1 lg:grid-cols-4 text-black">
			<img
				className="lg:h-28 lg:w-44 object-cover rounded-md"
				src={itemData?.image}
				alt={itemData.name}
			/>
			<div className="lg:col-span-2 flex justify-center flex-col">
				<h4 className="font-semibold lg:text-xl">{itemData.name}</h4>
				<p>By {itemData.instructorName}</p>
				<span className="flex gap-2">
					<p>4.9</p>
					<div className="text-primary-clr2 grid grid-flow-col place-items-center gap-1">
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i>
					</div>
					<p>(239 ratings)</p>
				</span>
				<p> total hours | {itemData.lesson} lessons</p>
			</div>
			<div className="flex justify-between">
				<div className="flex gap-1 flex-col justify-center align-middle text-blue-800 font-medium">
					<button
						disabled={deleting}
						onClick={handleDeleteFromCart}
						className="cursor-pointer text-blue-800"
					>
						{deleting ? "Removing" : "Remove"}
					</button>
					<p className="cursor-pointer">Save for Later</p>
				</div>
				<div className="flex flex-col justify-center align-middle">
					<h2 className="font-bold text-3xl">${itemData.price}</h2>
				</div>
			</div>
		</div>
	);
};

export default memo(CartItem);
