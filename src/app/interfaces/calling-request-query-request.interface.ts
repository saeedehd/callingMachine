export interface CallingRequestQueryRequest {
	criteria: {
		Customer_ID?: number;
		Number?: number;
		Department?: string;
		addDate?: Date;
		callStatus?: number;
	};
	sortBy?: string;
	pageNo: number;
}
