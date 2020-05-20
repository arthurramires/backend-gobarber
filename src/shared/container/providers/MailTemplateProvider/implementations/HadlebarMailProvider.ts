import handlebars from 'handlebars';
import fs from 'fs';
import IMailTemplateProvider from '../models/iMailTemplateProvider';
import IParseMailTemplateDTO from '../dtos/iParseMailTemplateDTO';

class HandlebarsMailProvider implements IMailTemplateProvider {
  public async parse({
    file,
    variables,
  }: IParseMailTemplateDTO): Promise<string> {
    const templateFileContent = fs.promises.readFile(file, {
      encoding: 'utf-8',
    });
    const parseTemplate = handlebars.compile(templateFileContent);

    return parseTemplate(variables);
  }
}

export default HandlebarsMailProvider;
