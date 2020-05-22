import { container } from 'tsyringe';
import IMailTemplateProvider from './models/iMailTemplateProvider';
import HandlebarsMailProvider from './implementations/HadlebarMailProvider';

const providers = {
  handlebars: HandlebarsMailProvider,
};

container.registerSingleton<IMailTemplateProvider>(
  'MailTemplateProvider',
  providers.handlebars,
);
