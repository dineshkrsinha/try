
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { RestangularModule, Restangular } from 'ngx-restangular';

import { Feedback } from '../shared/feedback';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ProcessHTTPMsgService } from './process-httpmsg.service';


@Injectable()
export class FeedbackService {

  constructor(private restangular: Restangular,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

   
  
    submitFeedback(feedback: Feedback): Observable<Response> {
      return  this.restangular.all('feedback').post(feedback);
    }

}
