import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';
import styles from './TimesheetAppWebPart.module.scss';
import * as strings from 'TimesheetAppWebPartStrings';

export interface ITimesheetAppWebPartProps {
  description: string;
}

export default class TimesheetAppWebPart extends BaseClientSideWebPart<ITimesheetAppWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${styles.timesheetApp}">
        <p>${this.properties.description}</p>
      </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
