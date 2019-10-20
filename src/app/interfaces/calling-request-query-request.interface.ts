export interface CallingRequestQueryRequest {
	criteria: {
		Customer_ID?: number;
		Number?: number;
	};
	sortBy?: string;
	pageNo: number;
}
