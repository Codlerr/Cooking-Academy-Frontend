import { AxiosError } from "axios";
import { useCallback, useEffect, useState } from "react";
import instance from "../API/api_instance";
import { Response } from "../API/services/types";

export interface CourseData {
	courses: Course[];
	total: number;
}

export interface Course {
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
}

const listCourseService = async () => {
	const res = await instance.get<Response<CourseData>>(
		"/student/course/my-course"
	);
	return res.data;
};

const useListCourse = () => {
	const [courses, setCourses] = useState<CourseData | null>(null);
	const [fetching, setFetching] = useState(false);
	const fetchCourse = useCallback(() => {
		setFetching(true);
		listCourseService()
			.then((res) => {
				setCourses(res.data);
			})
			.catch((err: AxiosError) => {
				console.log(err);
			})
			.finally(() => {
				setFetching(false);
			});
	}, []);

	useEffect(() => {
		fetchCourse();
	}, [fetchCourse]);

	return { courses, fetching };
};

export default useListCourse;
