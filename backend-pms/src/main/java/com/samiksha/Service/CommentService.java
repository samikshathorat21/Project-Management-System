package com.samiksha.Service;

import com.samiksha.modal.Comment;

import java.util.List;

public interface CommentService {

    Comment createComment(Long issueId , Long userId , String comment) throws Exception;

    void deleteComment(Long commentId , Long userId) throws Exception;

    List<Comment> findCommentByTssueId(Long issueId);

}
