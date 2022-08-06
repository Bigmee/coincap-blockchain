import React from "react"
import ChevronDown from "../../assets/svg/chevronDown"
import Info from "../../assets/svg/info"

const styles = {
    textIcon: `flex items-center`
}

const CMCTableHeader = () => {
    return (
        <tbody>
            <tr>
           
                <th></th>
                <th align="left" className="flex items-center"><b># &nbsp;</b><ChevronDown /></th>
               
                <th align="left">  Name  </th> 
               
               
            <th align="left">Price</th>
            
            <th align="left">24h %</th>
            <th align="left">7d %</th>
            <th><div className={styles.textIcon}><p className="mr-2">Market Cap</p> <Info /></div></th>
            <th><div className={styles.textIcon}><p className="mr-2">Volume(24h)</p> <Info /></div></th>
            <th><div className={styles.textIcon}><p className="mr-2">Circulating Supply</p> <Info /></div></th>
            <th>Last 7 days</th>
            </tr>
        </tbody>
    )


}
export default CMCTableHeader