import {
  Component,
  OnInit,
  ElementRef,
  Renderer2,
  ViewChild
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';

import { Post } from 'app/layout/models/Post';
import { PostService } from 'app/layout/services/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Attachments } from '../../models/Post';
import {FileUploadComponent} from '../../components/FileModuleComponent/FileUploadModule'
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
  providers: [PostService]
})
export class CreatePostComponent implements OnInit {
  public image: string;
  public myForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];
  public id: String;
  public attachemnts: Attachments[];
  public attachementType: number;
 public imageArray: Attachments[]
 public name: string;
 public uploadedFile: any;
  @ViewChild('fileInput') el: ElementRef;

  constructor(
    private _fb: FormBuilder,
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute,
    private rd: Renderer2
  ) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.name = `Angular : File Upload`;
    });
  }

  onChange(event) {
    const files = event.srcElement.files;
    console.log(files);
  }

  fileUpload() {
    this.uploadedFile = this.el.nativeElement.files[0];
  }

  ngOnInit() {
    this.myForm = this._fb.group({
      body: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      attachementType: [],
      image: []
    });

    // subscribe to form changes
    this.subcribeToFormChanges();

    // Update single value
    (<FormControl>this.myForm.controls['body']).setValue('John', {
      onlySelf: true
    });
  }

  addAttachemnt() {
    if (this.imageArray == null) {
    this.imageArray = [];
  }
  const attachemnt = new Attachments();
  attachemnt.data = this.image;
  attachemnt.type = String(this.attachementType);
  this.imageArray.push(attachemnt);
    this.image = '';
  }

  subcribeToFormChanges() {
    const myFormStatusChanges$ = this.myForm.statusChanges;
    const myFormValueChanges$ = this.myForm.valueChanges;

    myFormStatusChanges$.subscribe(x =>
      this.events.push({ event: 'STATUS_CHANGED', object: x })
    );
    myFormValueChanges$.subscribe(x =>
      this.events.push({ event: 'VALUE_CHANGED', object: x })
    );
  }

  save(model: Post, isValid: boolean) {
    if (isValid === true) {
      console.log(model, isValid);
      this.submitted = true;
      console.log(model, isValid);
      let post;
      post = new Post();
      post.author = 'model.author';
      post.attachments = this.imageArray;
      post.body = model.body;

      this.postService.createPost(post, this.id);
      this.router.navigateByUrl('/posts/' + this.id);
    } else {
      alert('zupa!!!' + this.id);
    }
    this.submitted = true;
  }
}
