```jsx
import { UploadField } from "@ffw/randstad-shared-components";

const onChange = () => {
    
}

<UploadField
  name="resume"
  files={[]}
  multiselect={false}
  maxSizeInBytes={8 * 1024 * 1024}
  fileToken={'fileToken'}
  translations={{
    UploadSuccessful: <FormattedMessage id="UploadField.UploadSuccessful" />,
    SuccessfulSubText: <FormattedMessage id="UploadField.SuccessfulSubText" />,
    AddFiles: <FormattedMessage id="UploadField.AddFiles" />,
    OrDropHere: <FormattedMessage id="UploadField.OrDropHere" />,
    AlternativeText: intl.formatMessage({ id: 'UploadField.AlternativeText' }, { allowedFiles: mimeTypesToExtensions(mimeTypes.join(', ')), maxFileSize: '8' }),
    DropFileHere: <FormattedMessage id="UploadField.DropFileHere" />,
    UserCvMaxSize: intl.formatMessage({ id: 'Schema.UserCv.MaxSize' }, { n: '8' }),
    FilenamePattern: intl.formatMessage({ id: 'Schema.UserCv.Filename.Pattern' }),
  }}
/>;
```
