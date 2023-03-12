import Center from "../flex/Center"
import './Rating.css'

const Rating = (props) => {
    const {
        results,
        getResults
    } = props;

    return (
        <Center>
            <div className="rating-table">
                <Center style={{flexDirection: 'column'}}>
                    <button onClick={getResults}>Обновить таблицу</button>
                    <table>
                        <tr>
                            <th>Место</th>
                            <th>Результат</th>
                            <th>Имя</th>
                            <th>Фамилия</th>
                        </tr>
                        {
                            results.map((result, index) => 
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{result.resultValue}</td>
                                    <td>{result.userFirstName}</td>
                                    <td>{result.userSecondName}</td>
                                </tr>
                            )
                        }
                    </table>
                </Center>
                
            </div>
        </Center>
    )
}

export default Rating;
