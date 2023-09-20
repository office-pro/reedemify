import {Component, EventEmitter, HostBinding, HostListener, Input, Output} from "@angular/core";
import { NgForm } from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'file-drag-drop',
  templateUrl: './files-drag-and-drop.component.html',
  styleUrls: ['./files-drag-and-drop.component.scss']
})

export class FileDragDropComponent {

  uploadForm: NgForm | any;
  private filesList: Array<any> = []

  @Input()
  multiple: boolean = true;

  @Input()
  fileUploadTypes: Array<string> = [];

  @Output() files: EventEmitter<Array<any>> = new EventEmitter();

  @HostBinding("style.background") private background = "#eee";

  constructor(private sanitizer: DomSanitizer) { }

  @HostListener("dragover", ["$event"]) public onDragOver(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = "#999";
  }

  @HostListener("dragleave", ["$event"]) public onDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = "#eee";
  }

  @HostListener('drop', ['$event']) public onDrop(evt: DragEvent | any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee';
  
    let files: Array<any> = this.addFilesToFilesList(evt?.dataTransfer?.files);
    this.onFilesPresent(files);
  }

  onSubmit(form: any) {
    console.log(this.filesList)
  }

  private addFilesToFilesList(filesArr: Array<any> = []) {
    const files: Array<any> = []
    for (let i = 0; i < filesArr.length; i++) {
      const file = filesArr[i];
      const url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
      files.push({ file, url });
    }
    return files
  }

  onFileUpload(event: any) {
    let files: Array<any> = this.addFilesToFilesList(event?.files);
    this.onFilesPresent(files)
  }

  private onFilesPresent(filesArr: Array<any> = []) {
    if (filesArr.length > 0) {
        this.filesList.push(filesArr);
        this.files.emit(filesArr);
      }
  }
}