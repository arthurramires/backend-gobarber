import { container } from 'tsyringe';

import IStorageProvider from './StorageProvider/models/iStorageProvider';
import DiskStorageProvider from './StorageProvider/implementations/DiskStorageProvider';

import IMailProvider from './MailProvider/models/iMailProvider';
import EtherealMailProvider from './MailProvider/implementations/EtherealMailProvider';

import IMailTemplateProvider from './MailTemplateProvider/models/iMailTemplateProvider';
import HandlebarsMailProvider from './MailTemplateProvider/implementations/HadlebarMailProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);

container.registerSingleton<IMailTemplateProvider>(
  'MailTemplateProvider',
  HandlebarsMailProvider,
);

container.registerInstance<IMailProvider>(
  'MailProvider',
  container.resolve(EtherealMailProvider),
);
