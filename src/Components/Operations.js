import React, {useState, useContext, useEffect} from 'react'
import AppContext from '../AppContext'


//expected structure 
//{name, async: true/false, function}
// The function must be with params so pass () => {RealFunc( 1, 2, 3, 4 );} 
// unless the function doesnt need any in that case just RealFunc

function Operations() {

    const {operations, setOperations} = useContext(AppContext);

    const  HandleOperation = async (op) => {
        console.log(op)
        if (op.type){
            try {
                await op.function()
            } catch (error) {
                const err = new Error(`operation ${op.name} failed`)
                err.op = op;
                throw err
            }
        }
        else{
            try {
                op.function()
            } catch (error) {
                const err = new Error(`operation ${op.name} failed`)
                err.op = op;
                throw err
            }
        }
    }

    useEffect(() => {

        async function PerformOperation(){
            if (operations.length > 0){
                
                const operationsTemp = [ ...operations ]
                for (let i = 0; i < operationsTemp.length; i++){
                    try {
                        await HandleOperation(operationsTemp.shift())
                    } catch (error) {
                        operationsTemp.push(error.failedOperation)
                    }
                }
                setOperations(operationsTemp)
            }       
        }

        PerformOperation()
    }, [operations, setOperations])




    return null; 
}

export default Operations