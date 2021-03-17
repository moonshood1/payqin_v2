const DataStructure = (props) => {
  const data = props.data;
  return (
    <div className="global_container">
      {data.map((content) => (
        <div className="global_container_content" key={content.id}>
          {content.content}
        </div>
      ))}
    </div>
  );
};

export default DataStructure;
