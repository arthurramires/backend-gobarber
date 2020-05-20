import IParseMailTemplateDTO from '../dtos/iParseMailTemplateDTO';

export default interface IMailTemplateProvider {
  parse(data: IParseMailTemplateDTO): Promise<string>;
}
