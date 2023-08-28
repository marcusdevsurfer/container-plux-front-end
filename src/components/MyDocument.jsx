import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

// Create Document Component
export const MyDocument = ({ data }) => ( // 
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>EIR #: {data.id}</Text>
                <Text>Dia de entrada: {data.entryDay}</Text>
                <Text>Hora de entrada: {data.entryHour}</Text>
                <Text>Estado: {data.status}</Text>
                <Text>Tipo: {data.type}</Text>
                <Text>Tamaño: {data.size}</Text>
                <Text>Operador: {data.operator}</Text>
                <Text>Placas: {data.licencePlate}</Text>
                <Text>Transportista: {data.carrier}</Text>
            </View>

        </Page>
    </Document>
);
