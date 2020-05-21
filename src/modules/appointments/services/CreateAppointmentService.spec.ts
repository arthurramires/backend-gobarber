import AppError from '@shared/errors/AppError';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointment: CreateAppointmentService;
describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );
  });
  it('should be able to create a new appointment', async () => {
    const appoinment = await createAppointment.execute({
      date: new Date(),
      user_id: '1223',
      provider_id: '1212121212',
    });

    expect(appoinment).toHaveProperty('id');
  });

  it('should not be able to create two appointments on the same time', async () => {
    const appointmentDate = new Date(2020, 4, 10, 11);
    await createAppointment.execute({
      date: appointmentDate,
      user_id: '1223',
      provider_id: '1212121212',
    });

    expect(
      createAppointment.execute({
        date: appointmentDate,
        user_id: '1223',
        provider_id: '1212121212',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
