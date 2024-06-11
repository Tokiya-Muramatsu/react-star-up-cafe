function RecommendList({ recommends, openModal }) {
  return (
    <div>
      <div className="recommend-show">
        <div>
          <h2>
            <span>私のおすすめ一覧</span>
          </h2>
        </div>

        <div>
          <table>
            <thead>
              <tr>
                <th>商品</th>
                <th>内容</th>
              </tr>
            </thead>
            <tbody>
              {recommends.map((recommend) => (
                <tr key={recommend.id}>
                  <td>{recommend.item}</td>
                  <td>{recommend.content}</td>
                  <td>
                    <button onClick={() => openModal(recommend)}>削除</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RecommendList;
