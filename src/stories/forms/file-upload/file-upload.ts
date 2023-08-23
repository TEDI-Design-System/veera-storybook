import '@scss/forms/forms.scss';
import clsx from 'clsx';

const createAttachment = (file: UploadFile, onRemove: (id: string) => void) => {
  const attachment = document.createElement('div');
  const error = file.name.toLocaleLowerCase().startsWith('viirus');
  attachment.className = clsx('v-file-upload__attachment', {
    'v-file-upload__attachment--error': error,
  });
  attachment.id = `attachment-${file.id}`;

  const attachmentName = document.createElement('span');
  attachmentName.className = 'v-file-upload__attachment__name';
  attachmentName.innerText = file.name;
  attachment.appendChild(attachmentName);

  if (error) {
    const errorIcon = document.createElement('span');
    errorIcon.className = 'material-icons-outlined v-file-upload__attachment__error-icon';
    errorIcon.innerText = 'error_outline';
    attachment.appendChild(errorIcon);
  }

  const removeBtn = document.createElement('button');
  removeBtn.className = 'material-icons v-file-upload__attachment__remove-btn';
  removeBtn.innerText = 'close';
  removeBtn.onclick = () => onRemove(file.id);
  attachment.appendChild(removeBtn);

  return attachment;
};

export interface FileUploadStoryProps {
  label: string;
  disabled: boolean;
  error: boolean;
}

interface UploadFile {
  id: string;
  name: string;
}

export const createFileUpload = ({ label, disabled, error }: FileUploadStoryProps) => {
  let files: UploadFile[] = [{ id: 'test', name: 'Fail.txt' }];

  const fileUpload = document.createElement('div');
  fileUpload.className = 'v-file-upload';

  const dropArea = document.createElement('button');
  dropArea.className = clsx('v-file-upload__drop-area', {
    'v-file-upload__drop-area--error': error,
  });
  dropArea.innerHTML = `<span class="material-icons v-file-upload__drop-area__attach-icon">attach_file</span>${label}`;
  dropArea.disabled = disabled;
  fileUpload.appendChild(dropArea);

  const input = document.createElement('input');
  input.type = 'file';
  input.multiple = true;
  dropArea.appendChild(input);

  dropArea.onclick = () => {
    input.click();
  };

  const attachmentList = document.createElement('div');
  attachmentList.className = 'v-file-upload__attachments-list';
  fileUpload.appendChild(attachmentList);

  const renderAttachments = (files: UploadFile[]) => {
    attachmentList.innerHTML = '';

    for (const file of files) {
      const attachment = createAttachment(file, onRemove);
      attachmentList.appendChild(attachment);
      if (file.name.toLocaleLowerCase().startsWith('viirus')) {
        const errorText = document.createElement('span');
        errorText.innerText = 'Uh-oh, viirus';
        errorText.className = 'v-form-feedback v-form-feedback--error';
        attachmentList.appendChild(errorText);
      }
    }
  };

  const onRemove = (id: string) => {
    files = files.filter((f) => f.id !== id);
    renderAttachments(files);
  };

  const onUpload = (newFiles: FileList) => {
    files = [
      ...files,
      ...[...newFiles].map((f) => ({ id: Math.random().toString(), name: f.name })),
    ];
    renderAttachments(files);
  };

  input.onchange = (e) => {
    const files = (e.target as HTMLInputElement).files;
    if (files) {
      onUpload(files);
    }
  };

  const onDragOver = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();
    dropArea.classList.add('v-file-upload__drop-area--drag-over');
  };

  const onDragLeave = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();
    dropArea.classList.remove('v-file-upload__drop-area--drag-over');
  };

  ['dragenter', 'dragover'].forEach((eventName) => {
    dropArea.addEventListener(eventName, onDragOver);
  });

  ['dragleave', 'drop'].forEach((eventName) => {
    dropArea.addEventListener(eventName, onDragLeave);
  });

  dropArea.ondrop = (e) => {
    const files = e.dataTransfer?.files;
    if (files) {
      onUpload(files);
    }
  };

  renderAttachments(files);

  return fileUpload;
};
