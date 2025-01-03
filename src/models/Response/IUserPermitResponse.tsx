export interface IUserPermitResponse {
  userId: number;
  workHolidayId: number;
  avatar: string;
  firstName: string;
  lastName: string;
  position: string;
  beginDate: Date;
  endDate: Date;
  description: string;
  holidayType: string;
  holidayState: string;
}
