package com.samiksha.Service;

import com.samiksha.modal.Chat;
import com.samiksha.modal.Project;
import com.samiksha.modal.User;

import java.util.List;

public interface ProjectService {

    Project createProject(Project project , User user) throws Exception;

    List<Project> getProjectByTeam(User user , String category , String tag) throws Exception;

    Project getProjectById(Long projectId) throws Exception;

    void deleteProject(Long projectId , Long userId) throws Exception;

    Project updateProject(Project updateProject , Long id) throws Exception;

    void addUserToProject(Long projectId , Long userId) throws Exception;

    void removeuserFromProject(Long projectId , Long userId) throws Exception;

    Chat getChatByProjectId(Long projectId) throws Exception;

    List<Project> searchProjects(String keyword , User user) throws Exception;
}
