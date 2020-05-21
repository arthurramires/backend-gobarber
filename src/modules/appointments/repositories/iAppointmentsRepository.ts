import Appointment from '../infra/typeorm/entities/Appointment';
import ICreateAppointmentDTO from '../dtos/iCreateAppointmentDTO';
import IFindInAllMonthFromProviderDTO from '../dtos/iFindInAllMonthFromProviderDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
  findAllInMonthFromProvider(
    data: IFindInAllMonthFromProviderDTO,
  ): Promise<Appointment[]>;
}
