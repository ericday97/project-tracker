import { useParams } from "react-router-dom";
import { Card, Descriptions, List, Tag } from "antd";
import { projectService } from "../services/projectService";

const statusColorMap = {
  todo: "red",
  in_progress: "orange",
  done: "green",
} as const;

const ProjectDetail = () => {
  const { id } = useParams();

  if (!id) return <div>No ID provided</div>;

  const project = projectService.getById(id);

  if (!project) return <div>Project not found</div>;

  return (
    <Card title={project.name} style={{ margin: "auto" }}>
      <Descriptions bordered column={1}>
        <Descriptions.Item label="Description">
          {project.description || "N/A"}
        </Descriptions.Item>
        <Descriptions.Item label="Created At">
          {new Date(project.createdAt).toLocaleString()}
        </Descriptions.Item>
        <Descriptions.Item label="Updated At">
          {project.updatedAt
            ? new Date(project.updatedAt).toLocaleString()
            : "—"}
        </Descriptions.Item>
      </Descriptions>

      <List
        style={{ marginTop: 32 }}
        header={<strong>Tasks</strong>}
        bordered
        dataSource={project.tasks}
        renderItem={(task) => (
          <List.Item>
            <div style={{ flex: 1 }}>
              <strong>{task.title}</strong>
              <div style={{ fontSize: 12, color: "#999" }}>
                {task.description || "—"}
              </div>
            </div>
            <Tag color={statusColorMap[task.status]}>{task.status}</Tag>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default ProjectDetail;
