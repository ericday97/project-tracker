import { Button, message, Popconfirm, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import type { Project } from "../types/Project";
import type { Task } from "../types/Task";
import { Link } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";
import { projectsAtom } from "../state/projectAtoms";
import { useAtom } from "jotai";

const statusColorMap: Record<Task["status"], string> = {
  todo: "red",
  in_progress: "orange",
  done: "green",
};

const Projects = () => {
  const [projects, setProjects] = useAtom(projectsAtom);

  const handleDelete = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
    message.success("Project deleted");
  };
  
  const columns: TableProps<Project>["columns"] = [
    {
      title: "Project Name",
      dataIndex: "name",
      key: "name",
      render: (text: string, record: Project) => (
        <>
          <Link to={`/projects/${record.id}`}>{text}</Link>
        </>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text: string | undefined) => text || "—",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date: string) => new Date(date).toLocaleDateString(),
    },
    {
      title: "Updated At",
      dataIndex: "updatedAt",
      key: "updatedAt",
      render: (date: string | undefined) =>
        date ? new Date(date).toLocaleDateString() : "—",
    },
    {
      title: "Tasks",
      key: "tasks",
      dataIndex: "tasks",
      render: (_: any, record: Project) => (
        <>
          {record.tasks.map((task: Task) => {
            const color = statusColorMap[task.status] || "default";
            return (
              <Tag color={color} key={task.id}>
                {task.title}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: Project) => (
        <Space size="middle">
          <Popconfirm
            title="Delete project"
            description={`Are you sure you want to delete "${record.name}"?`}
            onConfirm={() => handleDelete(record.id)}
            onCancel={() => {
              message.info(`Cancelled delete for "${record.name}"`);
            }}
            okText="Yes"
            cancelText="No"
          >
            <Button danger icon={<DeleteOutlined />}>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return <Table<Project> rowKey="id" columns={columns} dataSource={projects} />;
};

export default Projects;
