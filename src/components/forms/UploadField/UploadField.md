```jsx
import { UploadField } from "@ffw/randstad-shared-components";

<UploadField
  name="resume"
  files={[]}
  multiselect={false}
  maxSizeInBytes={8 * 1024 * 1024}
  supportedMimeTypes="application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/rtf, text/plain, image/jpeg, image/jpg"
  fileToken={'fileToken'}
  translations={{
    UploadSuccessful: 'upload successful',
    SuccessfulSubText: 'remove files to reactive upload',
    AddFiles: 'add files',
    OrDropHere: 'or drop files here',
    AlternativeText: '{allowedFiles} / max {maxFileSize} mb',
    DropFileHere: 'drop files here',
    UserCvMaxSize: 'we only allow files up to {n} mb, please try again',
    FilenamePattern: 'unsupported file type',
  }}
/>;
```
