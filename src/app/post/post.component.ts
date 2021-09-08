import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts = [];
  successMessage = 'Post Saved Successfully';
  showSuccess = false;

  // form part
  author = '';
  title = '';

  constructor(private readonly postData: PostService) { }

  ngOnInit(): void {
    this.getPostData()
  }

  getPostData(){

    this.postData.getPost('posts',{}).subscribe((jsonPost) => {
      this.posts = jsonPost;

    });
  }

  savePost(payload) {
    this.showSuccess = false;
    this.postData.savePost('posts',payload,{}).subscribe(() => {
      this.showSuccess = true;
    });

  }
  removeId(id: number){
    this.removePost(id);
  }

  removePost(id) {
    this.postData.removePost(`posts/${id}`,{}).subscribe(() => {
      alert('Removed');
    },
    (err)=> {
      alert('Error in removal');
    });
  }

  saveData(){
    const data = {author: this.author,title: this.title};
    this.savePost(data);
  }

}
