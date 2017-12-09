import { Component, OnInit } from '@angular/core';
import { Topic } from 'app/layout/models/Topic';
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TopicService } from 'app/layout/services/topic.service';
import { TopicPost } from 'app/layout/models/TopicPost';
import { Post } from 'app/layout/models/Post';
import {FileUploadModule} from 'app/layout/components/FileModuleComponent/FileUploadModule';
@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.scss'],
  providers: [TopicService]
})
export class CreateTopicComponent implements OnInit {
  public myForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];
  public id: String;
  constructor(
    private _fb: FormBuilder,
    private topicService: TopicService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    // the long way
    // this.myForm = new FormGroup({
    //     name: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
    //     address: new FormGroup({
    //         address1: new FormControl('', <any>Validators.required),
    //         postcode: new FormControl('8000')
    //     })
    // });

    // the short way
    this.myForm = this._fb.group({
      body: [''],
      title: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      description: [
        '',
        [<any>Validators.required, <any>Validators.minLength(5)]
      ]
    });

    // subscribe to form changes
    this.subcribeToFormChanges();

    // Update single value
    (<FormControl>this.myForm.controls['body']).setValue('John', {
      onlySelf: true
    });

    // Update form model
    // const people = {
    // 	name: 'Jane',
    // 	address: {
    // 		street: 'High street',
    // 		postcode: '94043'
    // 	}
    // };

    // (<FormGroup>this.myForm)
    //     .setValue(people, { onlySelf: true });
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

  save(model: Topic, isValid: boolean) {
    if (isValid === true) {
      this.submitted = true;
      const topic = new TopicPost();
      topic.thread = new Topic();
      topic.post = new Post();
      topic.thread.author = 'model.author';
      topic.thread.title = model.title;
      topic.post.body = model.body;

      this.topicService.createTopic(topic, this.id);
      console.log(topic, isValid);
      this.router.navigateByUrl('/topics/' + this.id);
    } else {
      alert('zupa!!!  ' + this.id);
    }
    this.submitted = true;

    console.log(model, isValid);
  }
}
