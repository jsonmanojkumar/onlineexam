import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaperService } from '../services/paper/paper.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  private paper: any = [];
  private question;
  private qindex = 0;
  private totalq = 0;
  private qat = 0;
  private wrong = 0;
  private correct = 0;
  private isSubmited=false;
  constructor(private route: ActivatedRoute, private paperService: PaperService) {
    this.route.params.subscribe(data => {
      this.getPaper(data);
    })

  }

  ngOnInit() {
    this.qindex = 0;
  }

  getPaper(data) {
    this.paperService.getPaper(data).subscribe(res => {
      this.paper = res.data;
      this.question = this.paper[this.qindex];
      this.paper.forEach(element => {
        element.ans = null;
        return element;
      });

    })
  }

  back() {
    if (this.qindex <= 0) {
      return false;
    }
    this.qindex = this.qindex - 1;
    this.question = this.paper[this.qindex];
  }

  next() {
    if (this.paper.length - 2 < this.qindex) {
      return false;
    }
    this.qindex = this.qindex + 1;
    this.question = this.paper[this.qindex];
  }

  selectOption(ans) {
    this.paper[this.qindex].ans = ans;

  }

  calculateResult() {
    this.totalq = this.paper.length;
    this.qat = 0;
    this.correct = 0;
    this.wrong = 0;
    this.paper.forEach(el => {

      if (el.ans) {
        this.qat = this.qat + 1;
        if (el.ans == el.correct) {
          this.correct = this.correct + 1;
        } else {
          this.wrong = this.wrong + 1;
        }
      }

    })
this.isSubmited=true;
    console.log('total q: ', this.totalq, '\n Total Atmp : ', this.qat, '\n currect : ', this.correct, '\nwrong : ', this.wrong);
  }


}
