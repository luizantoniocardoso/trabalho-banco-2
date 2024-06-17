

- Equipamentos (1) ---- (M) Manutenções
- Tipos de Manutenção (1) ---- (M) Manutenções
- Técnicos (1) ---- (M) Manutenções
- Manutenções (1) ---- (M) Histórico de Manutenção
- Peças de Reposição (1) ---- (M) Manutenções
- Manutenções (M) ---- (M) Técnicos
- Manutenções (M) ---- (M) Peças de Reposição


Tabelas Principais

----------------------------------------------
1. Equipamentos (Equipments)
- equipment_id (PK): Identificador único do equipamento.
- name: Nome do equipamento.
- description: Descrição do equipamento.
- model: Modelo do equipamento.
- serial_number: Número de série.
- purchase_date: Data de aquisição.
- location: Localização do equipamento.
----------------------------------------------
2. Tipos de Manutenção (MaintenanceTypes)
- maintenance_type_id (PK): Identificador único do tipo de manutenção.
- type_name: Nome do tipo de manutenção (e.g., preventiva, corretiva).
- description: Descrição do tipo de manutenção.

----------------------------------------------
3. Manutenções (Maintenances)
- maintenance_id (PK): Identificador único da manutenção.
- equipment_id (FK para Equipamentos): Referência ao equipamento.
- maintenance_type_id (FK para Tipos de Manutenção): Referência ao tipo de manutenção.
- scheduled_date: Data agendada para a manutenção.
- completion_date: Data de conclusão da manutenção.
- status: Status da manutenção (e.g., pendente, concluída, cancelada).
- description: Descrição detalhada da manutenção realizada.

----------------------------------------------
4. Técnicos (Technicians)
- technician_id (PK): Identificador único do técnico.
- name: Nome do técnico.
- contact_info: Informações de contato do técnico.
- specialization: Especialização do técnico.

----------------------------------------------
5. Técnicos em Manutenção (MaintenanceTechnicians)
- maintenance_id (FK para Manutenções): Referência à manutenção.
- technician_id (FK para Técnicos): Referência ao técnico.
- role: Papel do técnico na manutenção (e.g., principal, assistente).

----------------------------------------------
6. Histórico de Manutenção (MaintenanceHistory)
- history_id (PK): Identificador único do histórico de manutenção.
- maintenance_id (FK para Manutenções): Referência à manutenção.
- date: Data do evento.
- description: Descrição do evento (e.g., criação, atualização, conclusão).

----------------------------------------------
7. Peças de Reposição (SpareParts)
- part_id (PK): Identificador único da peça.
- name: Nome da peça.
- description: Descrição da peça.
- quantity: Quantidade em estoque.
- location: Localização do estoque.

----------------------------------------------
8. Peças Utilizadas em Manutenções (MaintenanceParts)
- maintenance_id (FK para Manutenções): Referência à manutenção.
- part_id (FK para Peças de Reposição): Referência à peça de reposição.
- quantity_used: Quantidade utilizada na manutenção.

----------------------------------------------
Relacionamentos
- Cada Equipamento pode ter várias Manutenções.
- Cada Manutenção é de um tipo específico definido em Tipos de Manutenção.
- Cada Manutenção pode envolver vários Técnicos e utilizar várias Peças de Reposição.
- O Histórico de Manutenção armazena eventos importantes para cada manutenção, permitindo rastrear mudanças e atualizações.
