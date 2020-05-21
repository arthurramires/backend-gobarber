import Appointment from '../infra/typeorm/entities/Appointment';
import ICreateAppointmentDTO from '../dtos/iCreateAppointmentDTO';
import IFindInAllMonthFromProviderDTO from '../dtos/iFindInAllMonthFromProviderDTO';
import IFindInAllDayFromProviderDTO from '../dtos/iFindInAllDayFromProviderDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
  findAllInMonthFromProvider(
    data: IFindInAllMonthFromProviderDTO,
  ): Promise<Appointment[]>;
  findAllInDayFromProvider(
    data: IFindInAllDayFromProviderDTO,
  ): Promise<Appointment[]>;
}
