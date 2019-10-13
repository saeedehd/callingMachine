export interface Department {
	info: string;
	id: number;
	priority: number;
	department: string;
	start_working_time: string;
	end_working_time: string;
	// nwd_table_id: number;
	dialplan_context: string;
	queue: string;
	query_method: string;
	// url_id: number;
	call_more: number;
	retry_time: number;
}
